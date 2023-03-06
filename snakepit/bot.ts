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

const calculateAvailableTiles: (gameMap: GameMap) => number = (gameMap) => {
  const totalTiles = gameMap.width * gameMap.height;
  return totalTiles - gameMap.occupiedTiles;
};

const FOOD_FACTOR = 1.2;
const OBSTACLE_FACTOR = 0.9;
const SNAKE_FACTOR = 0.85;

const NEXT_TICK_FACTOR = 0.5;

const MAX_DEPTH = 3;

const log = (prefix: string, msg: any, ...arg: any[]) => {
  console.log(`${prefix} ${msg}`, arg);
};

const scoreDirection: (
  gameMap: GameMap,
  direction: Direction,
  opponents: Snake[],
  depth: number,
  prefix: string,
) => number = (gameMap, direction, opponents, depth, prefix = '') => {
  if (depth > MAX_DEPTH) {
    return 0;
  }

  const myHeadPosition = gameMap.playerSnake.headCoordinate;
  const nextCoordinate = myHeadPosition.translateByDirection(direction);
  console.log('Current coordinate, next coordinate', myHeadPosition, nextCoordinate);

  if (nextCoordinate.isOutOfBounds(gameMap.width, gameMap.height)) {
    log(prefix, 'out of bounds', nextCoordinate);
    return 0;
  }
  const availableTiles = calculateAvailableTiles(gameMap);
  console.log('available', availableTiles);

  let score = reachableTiles(gameMap, nextCoordinate, availableTiles / 2);
  log(prefix, 'base score', direction, nextCoordinate, score);

  // Adjust score if we have food on the tile
  if (gameMap.getTileType(nextCoordinate) === TileType.Food) {
    log(prefix, 'food on tile, adjusting by ', FOOD_FACTOR);
    score = score * FOOD_FACTOR;
  }
  // Two steps ahead
  const twoAhead = gameMap.getTileType(nextCoordinate.translateByDirection(direction));
  if (twoAhead === TileType.Obstacle) {
    log(prefix, 'obstacle two steps ahead, adjusting by ', OBSTACLE_FACTOR);
    score = score * OBSTACLE_FACTOR;
  } else if (twoAhead === TileType.Snake) {
    log(prefix, 'snake two steps ahead, adjusting by ', SNAKE_FACTOR);
    score = score * SNAKE_FACTOR;
  }

  // Adjust score if we have other snakes close by
  opponents.forEach((opponent) => {
    const distance = nextCoordinate.euclidianDistanceTo(opponent.headCoordinate);
    if (distance < 5) {
      const factor = distance / 5;
      log(prefix, 'head close by, adjusting by factor', factor);
      score = score * factor;
    }
  });

  // Predict how the next state of the gamemap will look
  const nextGameMap = gameMap.clone();
  nextGameMap.setPlayerSnakeHead(nextCoordinate);

  // Adjust score if we can corner a opponent
  opponents.forEach((opponent) => {
    const opponentDirection =
      allDirections.find((direction) => opponent.canMoveInDirection(direction)) ?? Direction.Down;
    const nextOpponentPosition = opponent.headCoordinate.translateByDirection(opponentDirection);

    const tiles = reachableTiles(nextGameMap, nextOpponentPosition, 200);
    if (tiles < 200) {
      const factor = 1 + 200 / tiles / 50;
      log(prefix, 'cornering possible, adjusting by', factor);
      score = score * factor;
    }
  });

  const possibleNextMoves = allDirections.filter((direction) => nextGameMap.playerSnake.canMoveInDirection(direction));

  for (direction of possibleNextMoves) {
    score =
      score +
      (NEXT_TICK_FACTOR *
        scoreDirection(nextGameMap, direction, opponents, depth + 1, `${prefix}${direction.charAt(0)}`)) /
        possibleNextMoves.length;
  }

  return score;
};

let previousScore = 0;
export async function getNextMove(gameMap: GameMap): Promise<Direction> {
  console.log('...................................................');
  console.log('Computing move for tick', gameMap.gameTick);
  console.log('Current head position', gameMap.playerSnake.headCoordinate);
  const startTime = performance.now();
  //Filters safe directions to move in
  let possibleMoves = allDirections.filter((direction) => gameMap.playerSnake.canMoveInDirection(direction));

  // If there are no safe moves, bad luck!
  if (possibleMoves.length === 0) {
    return Direction.Down;
  }

  const opponents: Snake[] = [];
  gameMap.snakes.forEach((snake) => {
    if (snake.headCoordinate !== undefined && snake.id !== gameMap.playerId) {
      opponents.push(snake);
    }
  });

  // Act more random if the previous score is high (lot's of space)
  const freeTiles = gameMap.width * gameMap.height - gameMap.occupiedTiles;
  if (previousScore > freeTiles / 3) {
    console.log('Score is high, acting random');
    possibleMoves = possibleMoves.sort(function (a, b) {
      return 0.5 - Math.random();
    });
  }

  const moveScore = possibleMoves
    .map((direction) => ({ score: scoreDirection(gameMap, direction, opponents, 0, direction.charAt(0)), direction }))
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
