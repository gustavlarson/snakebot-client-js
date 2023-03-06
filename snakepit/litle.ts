import { snakeConsole as console } from '../src/client';
import { Coordinate, GameMap } from '../src/utils';
import { MessageType } from '../src/messages';
import { GameSettings, Direction, TileType } from '../src/types';
import type { GameStartingEventMessage, Message, SnakeDeadEventMessage } from '../src/types_messages';

const allDirections = Object.values(Direction);

const reachableTiles: (gameMap: GameMap, move: Coordinate) => number = (gameMap, move) => {
  const visited: Coordinate[] = [];
  const candidates: Coordinate[] = [move];
  while (candidates.length > 0) {
    //console.log(candidates);
    const candidate = candidates.pop();
    //console.log("candidate", candidate);
    visited.push(candidate!);
    for (const direction of allDirections) {
      const translated = candidate!.translateByDirection(direction);
      if (
        visited.filter((coord) => coord.x === translated.x && coord.y === translated.y).length === 0 &&
        translated.isWithinSquare({ x: 0, y: 0 }, { x: gameMap.width, y: gameMap.height }) &&
        (gameMap.getTileType(translated) === TileType.Empty || gameMap.getTileType(translated) === TileType.Food)
      ) {
        candidates.push(translated);
      }
    }
  }
  return visited.length;
};

const scoreDirection: (gameMap: GameMap, direction: Direction, snakeHeads: Coordinate[]) => number = (
  gameMap,
  direction,
  snakeHeads,
) => {
  const myHeadPosition = gameMap.playerSnake.headCoordinate;
  const nextCoordinate = myHeadPosition.translateByDirection(direction);

  let score = reachableTiles(gameMap, nextCoordinate);

  snakeHeads.forEach((snakeHead) => {
    if (snakeHead !== undefined) {
      const distance = nextCoordinate.euclidianDistanceTo(snakeHead);
      if (distance < 5) {
        score = score - (5 - distance) * 100;
      }
    }
  });

  // Look ahead one step
  switch (gameMap.getTileType(nextCoordinate.translateByDirection(direction))) {
    case TileType.Food:
      score = score + 100;
      break;
  }
  // Look ahead two steps
  switch (gameMap.getTileType(nextCoordinate.translateByDirection(direction))) {
    case TileType.Food:
      score = score + 10;
      break;
    case TileType.Obstacle:
      score = score - 10;
      break;
    case TileType.Snake:
      score = score - 100;
      break;
  }

  // Look ahead three steps
  switch (gameMap.getTileType(nextCoordinate.translateByDirection(direction).translateByDirection(direction))) {
    case TileType.Food:
      score = score + 1;
      break;
    case TileType.Obstacle:
      score = score - 1;
      break;
    case TileType.Snake:
      score = score - 10;
      break;
  }

  return score;
};

export async function getNextMove(gameMap: GameMap): Promise<Direction> {
  //Filters safe directions to move in
  let possibleMoves = allDirections.filter((direction) => gameMap.playerSnake.canMoveInDirection(direction));

  // If there are no safe moves, bad luck!
  if (possibleMoves.length === 0) {
    return Direction.Down;
  }

  const snakeHeads: Coordinate[] = [];
  gameMap.snakes.forEach((snake) => {
    if (snake.coordinates !== undefined) {
      if (snake.id !== gameMap.playerId) {
        snakeHeads.push(snake.headCoordinate);
      }
    }
  });
  if (snakeHeads.length > 2) {
    possibleMoves = possibleMoves.sort(function (a, b) {
      return 0.5 - Math.random();
    });
  }
  const moveScore = possibleMoves

    .map((direction) => ({ score: scoreDirection(gameMap, direction, snakeHeads), direction }))
    .sort((a, b) => b.score - a.score);
  //console.log('scores', moveScore);

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
// - Optimisation: stop counting reachable tiles after > half board is reachable
// - Calculate reachable tiles for opponent
// Score each tile depending on if it can be reached by opponent
