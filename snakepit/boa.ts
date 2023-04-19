import { snakeConsole as console } from '../src/client';
import { Coordinate, GameMap, Snake } from '../src/utils';
import { MessageType } from '../src/messages';
import { GameSettings, Direction, TileType } from '../src/types';
import type { GameStartingEventMessage, Message, SnakeDeadEventMessage } from '../src/types_messages';
import { performance } from 'perf_hooks';
import { RelativeDirection } from '../src/types';

let allDirections = Object.values(Direction);

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
const FOOD_FACTOR = 1.3;
const OBSTACLE_FACTOR = 0.9;
const SNAKE_PARALLEL_FACTOR = 0.85;
const SNAKE_FACTOR = 0.8;
const SNAKE_HEAD_FACTOR = 0.7;
const POSSIBLE_COLLISION_ADJUSTMENT = 0.25;
const MAX_COMPUTATION_TIME = 200;

const NEXT_TICK_FACTOR = 0.7;

const log = (prefix: string, msg: any, ...arg: any[]) => {
  console.log(`${prefix} ${msg}`, arg);
};
const debug = (prefix: string, msg: any, ...arg: any[]) => {
  console.debug(`${prefix} ${msg}`, arg);
};

const scoreDirection: (
  gameMap: GameMap,
  direction: Direction,
  depth: number,
  maxDepth: number,
  prefix: string,
  panicMode: boolean,
  abortTime: number,
  previousTileType: TileType,
) => number = (gameMap, direction, depth, maxDepth, prefix = '', panicMode, abortTime, previousTileType) => {
  if (depth > maxDepth) {
    return 0;
  }
  if (performance.now() > abortTime) {
    //log(prefix, 'Calculation reached time limit');
    return 0;
  }

  const currentCoordinate = gameMap.playerSnake().headCoordinate;
  if (currentCoordinate === undefined || currentCoordinate === null) {
    return 0;
  }
  const nextCoordinate = currentCoordinate.translateByDirection(direction);
  //debug(prefix, 'Current coordinate, next coordinate', myHeadPosition, nextCoordinate);

  if (currentCoordinate.isOutOfBounds(gameMap.width, gameMap.height)) {
    return 0;
  }
  if (gameMap.getTileType(currentCoordinate) === TileType.Obstacle) {
    return 0;
  }
  const availableTiles = gameMap.availableTilesCount();

  const tilesToSearch = availableTiles / (depth > 3 ? 4 : 2);

  let score = reachableTiles(gameMap, currentCoordinate, tilesToSearch);
  //debug(prefix, 'base score', direction, nextCoordinate, score);
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
  if (previousTileType === TileType.Food) {
    //log(prefix, 'food on tile, adjusting by ', FOOD_FACTOR);
    score = score * FOOD_FACTOR;
  }
  // Adjust if we can tail nibble
  else if (opponentTails.includes(currentCoordinate)) {
    //debug(prefix, 'tail nibble possible, adjusting by ', TAIL_NIBBLE_FACTOR);
    score = score * TAIL_NIBBLE_FACTOR;
  }
  /*
  const leftTile = gameMap.getTileType(
    nextCoordinate.translateByDirection(gameMap.playerSnake().relativeToAbsolute(RelativeDirection.Left)),
  );
  const rightTile = gameMap.getTileType(
    nextCoordinate.translateByDirection(gameMap.playerSnake().relativeToAbsolute(RelativeDirection.Right)),
  );
  if (leftTile === TileType.Obstacle || leftTile === TileType.Snake) {
    score = score * SNAKE_PARALLEL_FACTOR;
  }
  if (rightTile === TileType.Obstacle || rightTile === TileType.Snake) {
    score = score * SNAKE_PARALLEL_FACTOR;
  }*/

  // Two steps ahead
  const nextCoordinateTileType = gameMap.getTileType(nextCoordinate);
  if (nextCoordinateTileType === TileType.Obstacle) {
    // debug(prefix, 'obstacle two steps ahead, adjusting by ', OBSTACLE_FACTOR);
    score = score * OBSTACLE_FACTOR;
  } else if (opponentTails.includes(nextCoordinate)) {
    // debug(prefix, 'tail nibble possible, adjusting by ', TAIL_NIBBLE_FACTOR);
    score = score * TAIL_NIBBLE_FACTOR;
  } else if (opponentHeads.includes(nextCoordinate)) {
    // debug(prefix, 'snake head two steps ahead, adjusting by ', SNAKE_HEAD_FACTOR);
    score = score * SNAKE_HEAD_FACTOR;
  } else if (nextCoordinateTileType === TileType.Snake) {
    //  debug(prefix, 'snake two steps ahead, adjusting by ', SNAKE_FACTOR);
    score = score * SNAKE_FACTOR;
  }

  // Adjust score if we have other snakes close by
  opponents.forEach((opponent) => {
    const distance = currentCoordinate.manhattanDistanceTo(opponent.headCoordinate);
    if (distance < 5) {
      const factor = distance / 5 + 0.000001;
      // debug(prefix, 'head close by, adjusting by factor', factor);
      score = score * factor;
    }
  });

  // Predict how the next state of the gamemap will look
  /*const nextGameMap = gameMap.predictNextGamemapState(direction);

  if (nextGameMap.playerSnake().coordinates.length === 0) {
    //We died
    return 0;
  }*/

  // Adjust score if we can corner a opponent. Skip in panic mode, time consuming.
  if (!panicMode) {
    const nonStockholmSnakesAlive = opponents.filter((s) => !s.name.startsWith('STO')).length > 0;
    opponents
      .filter((snake) => snake.coordinates.length > 0)
      .filter((s) => nonStockholmSnakesAlive && !s.name.startsWith('STO'))
      .forEach((opponent) => {
        const opponentDirection =
          allDirections.find((direction) => opponent.canMoveInDirection(direction)) ?? Direction.Down;
        const nextOpponentPosition = opponent.headCoordinate.translateByDirection(opponentDirection);
        let limit = depth < 3 ? 200 : 100;
        if (depth > 4) {
          limit = 25;
        }

        const tiles = reachableTiles(gameMap, nextOpponentPosition, limit);
        if (tiles < limit) {
          const factor = 1 + limit / (tiles + 1) / 2.5;
          // debug(prefix, 'cornering possible, adjusting by', factor);
          score = score * factor;
        }
      });
  }

  const possibleNextMoves = allDirections.filter((direction) => gameMap.playerSnake().canMoveInDirection(direction));

  if (possibleNextMoves.length > 0) {
    const scores = possibleNextMoves.map((direction) =>
      scoreDirection(
        gameMap.predictNextGamemapState(direction),
        direction,
        depth + 1,
        maxDepth,
        `${prefix}${direction.charAt(0)}`,
        panicMode,
        abortTime,
        gameMap.getTileType(gameMap.playerSnake().headCoordinate.translateByDirection(direction)),
      ),
    );
    scores.sort((a, b) => b - a);

    score =
      score +
      scores
        .map((score, index) => {
          return score * (NEXT_TICK_FACTOR / (1 + index * 1.5));
        })
        .reduce((previous, current) => previous + current, 0);
  }

  return score;
};

export async function getNextMove(gameMap: GameMap): Promise<Direction> {
  //console.log('...................................................');
  //console.log('Computing move for tick', gameMap.gameTick);
  //console.log('Current head position', gameMap.playerSnake().headCoordinate);
  const startTime = performance.now();

  if (gameMap.gameTick % 2 === 0) {
    allDirections = Object.values(Direction).sort(function (a, b) {
      return 0.5 - Math.random();
    });
  }

  //Filters safe directions to move in
  const possibleMoves = allDirections.filter((direction) => gameMap.playerSnake().canMoveInDirection(direction));

  // If there are no safe moves, bad luck!
  if (possibleMoves.length === 0) {
    return allDirections[0];
  }

  // Act more random if the previous score is high (lot's of space)
  /*const freeTiles = gameMap.width * gameMap.height - gameMap.occupiedTilesCount;
  if (previousScore > freeTiles * 5) {
    console.log('Score is high, acting random');
    possibleMoves = possibleMoves.sort(function (a, b) {
      return 0.5 - Math.random();
    });
  }*/

  let maxDepth = 0;
  let panicMode = false;
  if (possibleMoves.length === 1) {
    maxDepth = 1;
  } else {
    const reachableTileCount = possibleMoves.map((direction) =>
      reachableTiles(gameMap, gameMap.playerSnake().headCoordinate.translateByDirection(direction), 200),
    );
    if (reachableTileCount.reduce((acc, curr) => acc + curr, 0) < 25) {
      maxDepth = 50;
      panicMode = true;
    } else if (reachableTileCount.reduce((acc, curr) => acc + curr, 0) < 50) {
      maxDepth = 30;
      panicMode = true;
    } else if (reachableTileCount.reduce((acc, curr) => acc + curr, 0) < 200) {
      maxDepth = 20;
      panicMode = true;
    } else {
      if (possibleMoves.length === 2) {
        maxDepth = 5;
      } else if (possibleMoves.length === 3) {
        maxDepth = 4;
      }
    }
  }

  const opponents: Snake[] = [];
  gameMap.snakes.forEach((snake) => {
    if (snake.headCoordinate !== undefined && snake.id !== gameMap.playerId) {
      opponents.push(snake);
    }
  });

  const opponentCount = opponents.length;

  if (opponentCount < 3 && possibleMoves.length > 1) {
    maxDepth = maxDepth + 1;
  }

  const possibleOpponentCoordinates: Coordinate[] = opponents.flatMap((snake) => {
    const possibleNextMoves = allDirections.filter((direction) => snake.canMoveInDirection(direction));

    return possibleNextMoves.map((move) => snake.headCoordinate.translateByDirection(move));
  });

  //console.log('MAX DEPTH', maxDepth);
  const abortTime = startTime + MAX_COMPUTATION_TIME;
  const moveScore = possibleMoves
    .map((direction) => {
      const possibleCollision: boolean =
        possibleOpponentCoordinates.find(
          (c) => c.manhattanDistanceTo(gameMap.playerSnake().headCoordinate.translateByDirection(direction)) === 0,
        ) !== undefined;
      return {
        score:
          scoreDirection(
            gameMap.predictNextGamemapState(direction),
            direction,
            0,
            maxDepth,
            direction.charAt(0),
            panicMode,
            abortTime,
            gameMap.getTileType(gameMap.playerSnake().headCoordinate.translateByDirection(direction)),
          ) * (possibleCollision ? POSSIBLE_COLLISION_ADJUSTMENT : 1),
        direction,
      };
    })
    .sort((a, b) => b.score - a.score);
  //console.log('scores', moveScore);

  const endTime = performance.now();
  //console.log('computation time: ', endTime - startTime);
  //console.log('Move', moveScore[0].direction);
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

export const trainingGameSettings = {
  maxNoofPlayers: 7,
} as GameSettings;

//TODO:
// - Dynamicly adjust search depth depending on possible moves, reachable tiles
// Recover mode if score is small: search further!
