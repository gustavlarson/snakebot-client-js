import { snakeConsole as console } from '../src/client';
import { Coordinate, GameMap } from '../src/utils';
import { MessageType } from '../src/messages';
import { GameSettings, Direction, RelativeDirection, TileType } from '../src/types';
import type { GameStartingEventMessage, Message, SnakeDeadEventMessage } from '../src/types_messages';

const allDirections = Object.values(Direction); // [Direction.Up, Direction.Down, Direction.Left, Direction.Right];

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
    visited.push(candidate!);
    for (const direction of allDirections) {
      const translated = candidate!.translateByDirection(direction);
      if (
        visited.filter((coord) => coord.x === translated.x && coord.y === translated.y).length === 0 &&
        // !translated.isWithinSquare({ x: 0, y: 0 }, { x: gameMap.width, y: gameMap.height }) &&
        gameMap.isTileFree(translated)
      ) {
        candidates.push(translated);
      }
    }
  }
  return visited.length;
};

/**
 * This is where you write your AI code. You will be given a GameMap object containing the current state of the game.
 * Use this object to determine your next move. Remember to return a Direction enum value before your time runs out!
 * (Default time is 250ms)
 */
export async function getNextMove(gameMap: GameMap): Promise<Direction> {
  const myHeadPosition = gameMap.playerSnake.headCoordinate; // Coordinate of my snake's head
  const possibleMoves = allDirections.filter((direction) => gameMap.playerSnake.canMoveInDirection(direction)); //Filters safe directions to move in

  // If there are no safe moves, bad luck!
  if (possibleMoves.length === 0) {
    return Direction.Down;
  }

  console.log('possible moves', possibleMoves);
  const moveScore = possibleMoves
    .map((move) => {
      console.log('Translated ', move, myHeadPosition.translateByDirection(move));
      return { score: reachableTiles(gameMap, myHeadPosition.translateByDirection(move)), move: move };
    })
    .sort((a, b) => b.score - a.score);

  console.log('scores', moveScore);
  const highScore = moveScore[0].score;
  const highScores = moveScore.filter((score) => score.score === highScore);

  if (moveScore.length !== highScores.length) {
    return highScores[0].move;
  }

  // All options contains the same open area
  /*if (highScore?.score === moveScore.at(1)?.score) {
    const list = [moveScore.at(0), moveScore.at(1)];
    return getRandomItem(list)!.move;
  }*/

  for (const [id, snake] of gameMap.snakes.entries()) {
    if (id === gameMap.playerId) {
      continue;
    }
    const delta = gameMap.playerSnake.headCoordinate.deltaTo(snake.tailCoordinate);
    if (delta.x > 0 && possibleMoves.includes(Direction.Down)) {
      console.log(`Hunting ${id}`);
      return Direction.Down;
    } else if (delta.x < 0 && possibleMoves.includes(Direction.Up)) {
      console.log(`Hunting ${id}`);
      return Direction.Up;
    }

    if (delta.y > 0 && possibleMoves.includes(Direction.Right)) {
      console.log(`Hunting ${id}`);
      return Direction.Right;
    } else if (delta.y < 0 && possibleMoves.includes(Direction.Left)) {
      console.log(`Hunting ${id}`);
      return Direction.Left;
    }
  }

  return getRandomItem(highScores).move;
  //return highScores[0].move;
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
