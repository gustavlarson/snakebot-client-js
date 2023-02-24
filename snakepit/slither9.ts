import { snakeConsole as console } from '../src/client';
import { Coordinate, GameMap, Snake } from '../src/utils';
import { MessageType } from '../src/messages';
import { GameSettings, Direction, TileType } from '../src/types';
import type { GameStartingEventMessage, Message, SnakeDeadEventMessage } from '../src/types_messages';
import { performance } from 'perf_hooks';

const allDirections = Object.values(Direction);

const reachableTiles: (gameMap: GameMap, move: Coordinate, limit: number) => number = (gameMap, move, limit) => {
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
    if (visited.length > limit) {
      return limit;
    }
  }
  return visited.length;
};

const calculateAvailableTiles: (gameMap: GameMap) => number = (gameMap) => {
  const totalTiles = gameMap.width * gameMap.height;
  return totalTiles - gameMap.occupiedTiles;
};

const scoreDirection: (gameMap: GameMap, direction: Direction, opponents: Snake[]) => number = (
  gameMap,
  direction,
  opponents,
) => {
  const myHeadPosition = gameMap.playerSnake.headCoordinate;
  const nextCoordinate = myHeadPosition.translateByDirection(direction);
  const availableTiles = calculateAvailableTiles(gameMap);

  let score = reachableTiles(gameMap, nextCoordinate, availableTiles * 0.6);

  // Adjust score if we have other snakes close by
  opponents.forEach((opponent) => {
    if (opponent.headCoordinate !== undefined) {
      const distance = nextCoordinate.euclidianDistanceTo(opponent.headCoordinate);
      if (distance < 5) {
        score = score - (5 - distance) * 100;
      }
    }
  });

  // Adjust score if we can corner a opponent
  opponents.forEach((opponent) => {
    if (opponent.headCoordinate !== undefined) {
      const nextOpponentPosition = opponent.headCoordinate.translateByDirection(
        allDirections.find((direction) => opponent.canMoveInDirection(direction)) ?? Direction.Down,
      );
      const tiles = reachableTiles(gameMap, nextOpponentPosition, 100);
      if (tiles < 100) {
        score = score + 100 - tiles;
      }
    }
  });

  switch (gameMap.getTileType(nextCoordinate)) {
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

  // Act more random if we have more than two opponents
  if (opponents.length > 2) {
    possibleMoves = possibleMoves.sort(function (a, b) {
      return 0.5 - Math.random();
    });
  }

  const moveScore = possibleMoves
    .map((direction) => ({ score: scoreDirection(gameMap, direction, opponents), direction }))
    .sort((a, b) => b.score - a.score);
  console.log('scores', moveScore);

  const endTime = performance.now();
  console.log('computation time: ', endTime - startTime);

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
// - Calculate reachable tiles for opponent
// Score each tile depending on if it can be reached by opponent
// TODO scoring adjustment should be a percentage, not a fixed number
