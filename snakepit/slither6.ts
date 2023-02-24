import { snakeConsole as console } from '../src/client';
import { Coordinate, GameMap } from '../src/utils';
import { MessageType } from '../src/messages';
import { GameSettings, Direction, TileType } from '../src/types';
import type { GameStartingEventMessage, Message, SnakeDeadEventMessage } from '../src/types_messages';

const allDirections = Object.values(Direction);

// Get random item in array
function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

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

const scoreDirection: (gameMap: GameMap, direction: Direction) => number = (gameMap, direction) => {
  const myHeadPosition = gameMap.playerSnake.headCoordinate;
  const nextCoordinate = myHeadPosition.translateByDirection(direction);

  let score = reachableTiles(gameMap, nextCoordinate);

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
  const possibleMoves = allDirections.filter((direction) => gameMap.playerSnake.canMoveInDirection(direction));

  // If there are no safe moves, bad luck!
  if (possibleMoves.length === 0) {
    return Direction.Down;
  }

  // Avoid going
  const moveScore = possibleMoves
    .sort(function (a, b) {
      return 0.5 - Math.random();
    })
    .map((direction) => ({ score: scoreDirection(gameMap, direction), direction }))
    .sort((a, b) => b.score - a.score);
  console.log('scores', moveScore);

  return moveScore[0].direction;
}

/**
 * This is an optional handler that you can use if you want to listen for specific events.
 * Check out the MessageType enum for a list of events that can be listened to.
 */
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

// Settings ommitted are set to default values from the server, change this if you want to override them
export const trainingGameSettings = {
  // maxNoofPlayers: 2,
  // obstaclesEnabled: false,
  // ...
} as GameSettings;
