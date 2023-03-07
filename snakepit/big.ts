import { snakeConsole as console } from '../src/client';
import { Coordinate, GameMap, Snake } from '../src/utils';
import { MessageType } from '../src/messages';
import { GameSettings, Direction, TileType } from '../src/types';
import type { GameStartingEventMessage, Message, SnakeDeadEventMessage } from '../src/types_messages';
import { performance } from 'perf_hooks';

const allDirections = Object.values(Direction);

export const reachableTiles: (gameMap: GameMap, move: Coordinate, limit: number) => number = (gameMap, move, limit) => {
  if (move.isOutOfBounds(gameMap.width, gameMap.height)) {
    return 0;
  }

  const visited: Set<number> = new Set();
  const candidates: Coordinate[] = [move];
  while (candidates.length > 0) {
    const candidate = candidates.pop();
    visited.add(candidate!.toPosition(gameMap.width, gameMap.height));
    for (const direction of allDirections) {
      const translated = candidate!.translateByDirection(direction);
      if (
        !translated.isOutOfBounds(gameMap.width, gameMap.height) &&
        !visited.has(translated.toPosition(gameMap.width, gameMap.height)) &&
        (gameMap.getTileType(translated) === TileType.Empty || gameMap.getTileType(translated) === TileType.Food)
      ) {
        candidates.push(translated);
      }
    }
    if (visited.size > limit) {
      return limit;
    }
  }
  return visited.size;
};

const TAIL_NIBBLE_FACTOR = 1.5;
const FOOD_FACTOR = 1.2;
const OBSTACLE_FACTOR = 0.9;
const SNAKE_FACTOR = 0.85;
const SNAKE_HEAD_FACTOR = 0.5;

const NEXT_TICK_FACTOR = 0.5;

const log = (prefix: string, msg: any, ...arg: any[]) => {
  //console.log(`${prefix} ${msg}`, arg);
};
const debug = (prefix: string, msg: any, ...arg: any[]) => {
  //console.debug(`${prefix} ${msg}`, arg);
};

const scoreDirection: (
  gameMap: GameMap,
  direction: Direction,
  depth: number,
  maxDepth: number,
  prefix: string,
  panicMode: boolean,
) => number = (gameMap, direction, depth, maxDepth, prefix = '', panicMode) => {
  if (depth > maxDepth) {
    return 0;
  }

  const myHeadPosition = gameMap.playerSnake().headCoordinate;
  const nextCoordinate = myHeadPosition.translateByDirection(direction);
  debug(prefix, 'Current coordinate, next coordinate', myHeadPosition, nextCoordinate);

  if (nextCoordinate.isOutOfBounds(gameMap.width, gameMap.height)) {
    return 0;
  }
  const availableTiles = gameMap.availableTilesCount();

  const tilesToSearch = availableTiles / (depth > 3 ? 4 : 2);

  let score = reachableTiles(gameMap, nextCoordinate, tilesToSearch);
  debug(prefix, 'base score', direction, nextCoordinate, score);
  if (panicMode && score >= tilesToSearch - 1) {
    return score;
  }

  const opponents: Snake[] = [];
  gameMap.snakes.forEach((snake) => {
    if (snake.headCoordinate !== undefined && snake.id !== gameMap.playerId) {
      opponents.push(snake);
    }
  });

  const opponentTails = opponents
    .filter((snake) => snake.tailProtectedForGameTicks === 0)
    .map((snake) => snake.tailCoordinate);
  const opponentHeads = opponents.map((snake) => snake.headCoordinate);

  // Adjust score if we have food on the tile
  if (gameMap.getTileType(nextCoordinate) === TileType.Food) {
    debug(prefix, 'food on tile, adjusting by ', FOOD_FACTOR);
    score = score * FOOD_FACTOR;
  }
  // Adjust if we can tail nibble
  else if (opponentTails.includes(nextCoordinate)) {
    debug(prefix, 'tail nibble possible, adjusting by ', TAIL_NIBBLE_FACTOR);
    score = score * TAIL_NIBBLE_FACTOR;
  }

  // Two steps ahead
  const twoAheadCoordinate = nextCoordinate.translateByDirection(direction);
  const twoAheadTileType = gameMap.getTileType(twoAheadCoordinate);
  if (twoAheadTileType === TileType.Obstacle) {
    debug(prefix, 'obstacle two steps ahead, adjusting by ', OBSTACLE_FACTOR);
    score = score * OBSTACLE_FACTOR;
  } else if (opponentTails.includes(twoAheadCoordinate)) {
    debug(prefix, 'tail nibble possible, adjusting by ', TAIL_NIBBLE_FACTOR);
    score = score * TAIL_NIBBLE_FACTOR;
  } else if (opponentHeads.includes(twoAheadCoordinate)) {
    debug(prefix, 'snake head two steps ahead, adjusting by ', SNAKE_HEAD_FACTOR);
    score = score * SNAKE_FACTOR;
  } else if (twoAheadTileType === TileType.Snake) {
    debug(prefix, 'snake two steps ahead, adjusting by ', SNAKE_FACTOR);
    score = score * SNAKE_FACTOR;
  }

  // Adjust score if we have other snakes close by
  opponents.forEach((opponent) => {
    const distance = nextCoordinate.manhattanDistanceTo(opponent.headCoordinate);
    if (distance < 8) {
      const factor = distance / 8 + 0.000001;
      debug(prefix, 'head close by, adjusting by factor', factor);
      score = score * factor;
    }
  });

  // Predict how the next state of the gamemap will look
  const nextGameMap = gameMap.predictNextGamemapState(direction);

  if (nextGameMap.playerSnake().coordinates.length === 0) {
    //We died
    return 0;
  }

  // Adjust score if we can corner a opponent
  opponents
    .filter((snake) => snake.coordinates.length > 0)
    .forEach((opponent) => {
      const opponentDirection =
        allDirections.find((direction) => opponent.canMoveInDirection(direction)) ?? Direction.Down;
      const nextOpponentPosition = opponent.headCoordinate.translateByDirection(opponentDirection);

      const tiles = reachableTiles(nextGameMap, nextOpponentPosition, 200);
      if (tiles < 200) {
        const factor = 1 + 200 / (tiles + 1) / 5;
        debug(prefix, 'cornering possible, adjusting by', factor);
        score = score * factor;
      }
    });

  const possibleNextMoves = allDirections.filter((direction) =>
    nextGameMap.playerSnake().canMoveInDirection(direction),
  );

  if (possibleNextMoves.length > 0) {
    const scores = possibleNextMoves.map((direction) =>
      scoreDirection(nextGameMap, direction, depth + 1, maxDepth, `${prefix}${direction.charAt(0)}`, panicMode),
    );
    scores.sort((a, b) => b - a);

    score = score + scores[0] * NEXT_TICK_FACTOR;
  }

  return score;
};

let previousScore = 0;
export async function getNextMove(gameMap: GameMap): Promise<Direction> {
  console.log('...................................................');
  console.log('Computing move for tick', gameMap.gameTick);
  console.log('Current head position', gameMap.playerSnake().headCoordinate);
  const startTime = performance.now();
  //Filters safe directions to move in
  let possibleMoves = allDirections.filter((direction) => gameMap.playerSnake().canMoveInDirection(direction));

  // If there are no safe moves, bad luck!
  if (possibleMoves.length === 0) {
    return Direction.Down;
  }

  // Act more random if the previous score is high (lot's of space)
  const freeTiles = gameMap.width * gameMap.height - gameMap.occupiedTilesCount;
  if (previousScore > freeTiles / 3) {
    console.log('Score is high, acting random');
    possibleMoves = possibleMoves.sort(function (a, b) {
      return 0.5 - Math.random();
    });
  }

  let maxDepth = 0;
  let panicMode = false;
  if (possibleMoves.length === 1) {
    maxDepth = 1;
  } else {
    const reachableTileCount = possibleMoves.map((direction) =>
      reachableTiles(gameMap, gameMap.playerSnake().headCoordinate.translateByDirection(direction), 100),
    );
    if (reachableTileCount.reduce((acc, curr) => acc + curr, 0) < 100) {
      maxDepth = 10;
      panicMode = true;
    } else if (reachableTileCount.reduce((acc, curr) => acc + curr, 0) < 50) {
      maxDepth = 15;
      panicMode = true;
    } else if (reachableTileCount.reduce((acc, curr) => acc + curr, 0) < 25) {
      maxDepth = 20;
      panicMode = true;
    } else {
      if (possibleMoves.length === 2) {
        maxDepth = 5;
      } else if (possibleMoves.length === 3) {
        maxDepth = 3;
      }
    }
  }
  console.log('MAX DEPTH', maxDepth);
  const moveScore = possibleMoves
    .map((direction) => ({
      score: scoreDirection(gameMap, direction, 0, maxDepth, direction.charAt(0), panicMode),
      direction,
    }))
    .sort((a, b) => b.score - a.score);
  console.log('scores', moveScore);

  const endTime = performance.now();
  console.log('computation time: ', endTime - startTime);
  previousScore = moveScore[0].score;
  return moveScore[0].direction;
}

export function onMessage(message: Message) {
  switch (message.type) {
    case MessageType.GameStarting:
      message = message as GameStartingEventMessage; // Cast to correct type
      // Reset snake state here
      break;
    case MessageType.SnakeDead:
      message = message as SnakeDeadEventMessage; // Cast to correct type
      // Check how many snakes are left and switch strategy
      break;
  }
}

export const trainingGameSettings = {} as GameSettings;

//TODO:
// - Dynamicly adjust search depth depending on possible moves, reachable tiles
// Recover mode if score is small: search further!
