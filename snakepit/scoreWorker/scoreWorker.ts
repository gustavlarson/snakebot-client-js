import { Direction, GameSettings, TileType } from '../../src/types';
import { Coordinate, GameMap, GameMapClone, Snake } from '../../src/utils';
const allDirections = Object.values(Direction);

export const reachableTiles: (
  gameMap: {
    playerId: string;
    width: number;
    height: number;
    snakes: Map<string, Snake>;
    tiles: Map<number, TileType>;
    gameSettings: GameSettings;
    gameTick: number;
    occupiedTilesCount: number;
  },
  move: Coordinate,
  limit: number,
) => number = (gameMapObj, move, limit) => {
  if (move.isOutOfBounds(gameMapObj.width, gameMapObj.height)) {
    return 0;
  }
  const gameMap = new GameMapClone(gameMapObj);

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

const NEXT_TICK_FACTOR = 0.5;

const log = (prefix: string, msg: any, ...arg: any[]) => {
  console.log(`${prefix} ${msg}`, arg);
};

const scoreDirection: (
  gameMap: {
    playerId: string;
    width: number;
    height: number;
    snakes: Map<string, Snake>;
    tiles: Map<number, TileType>;
    gameSettings: GameSettings;
    gameTick: number;
    occupiedTilesCount: number;
  },
  direction: Direction,
  depth: number,
  maxDepth: number,
  prefix: string,
  panicMode: boolean,
) => { score: number; direction: Direction } = (gameMapObj, direction, depth, maxDepth, prefix = '', panicMode) => {
  if (depth > maxDepth) {
    return { score: 0, direction };
  }

  const gameMap = new GameMapClone(gameMapObj);

  const myHeadPosition = gameMap.playerSnake().headCoordinate;
  const nextCoordinate = myHeadPosition.translateByDirection(direction);
  console.log('Current coordinate, next coordinate', myHeadPosition, nextCoordinate);

  if (nextCoordinate.isOutOfBounds(gameMap.width, gameMap.height)) {
    return { score: 0, direction };
  }
  const availableTiles = gameMap.getAvailableTileCount();

  let score = reachableTiles(gameMap, nextCoordinate, availableTiles / 2);
  log(prefix, 'base score', direction, nextCoordinate, score);
  if (panicMode && score > availableTiles / 3) {
    return { score, direction };
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

  // Adjust score if we have food on the tile
  if (gameMap.getTileType(nextCoordinate) === TileType.Food) {
    log(prefix, 'food on tile, adjusting by ', FOOD_FACTOR);
    score = score * FOOD_FACTOR;
  }
  // Adjust if we can tail nibble
  else if (opponentTails.includes(nextCoordinate)) {
    log(prefix, 'tail nibble possible, adjusting by ', TAIL_NIBBLE_FACTOR);
    score = score * TAIL_NIBBLE_FACTOR;
  }

  // Two steps ahead
  const twoAheadCoordinate = nextCoordinate.translateByDirection(direction);
  const twoAheadTileType = gameMap.getTileType(twoAheadCoordinate);
  if (twoAheadTileType === TileType.Obstacle) {
    log(prefix, 'obstacle two steps ahead, adjusting by ', OBSTACLE_FACTOR);
    score = score * OBSTACLE_FACTOR;
  } else if (opponentTails.includes(twoAheadCoordinate)) {
    log(prefix, 'tail nibble possible, adjusting by ', TAIL_NIBBLE_FACTOR);
    score = score * TAIL_NIBBLE_FACTOR;
  } else if (twoAheadTileType === TileType.Snake) {
    log(prefix, 'snake two steps ahead, adjusting by ', SNAKE_FACTOR);
    score = score * SNAKE_FACTOR;
  }

  // Adjust score if we have other snakes close by
  opponents.forEach((opponent) => {
    const distance = nextCoordinate.euclidianDistanceTo(opponent.headCoordinate);
    if (distance < 5) {
      const factor = distance / 5 + 0.000001;
      log(prefix, 'head close by, adjusting by factor', factor);
      score = score * factor;
    }
  });

  // Predict how the next state of the gamemap will look
  const nextGameMap = gameMap.predictNextGamemapState(direction);

  // Adjust score if we can corner a opponent
  opponents
    .filter((snake) => snake.coordinates.length > 0)
    .forEach((opponent) => {
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

  const possibleNextMoves = allDirections.filter((direction) =>
    nextGameMap.playerSnake().canMoveInDirection(direction),
  );

  for (direction of possibleNextMoves) {
    score =
      score +
      (NEXT_TICK_FACTOR *
        scoreDirection(
          {
            playerId: nextGameMap.playerId,
            width: nextGameMap.width,
            height: nextGameMap.height,
            snakes: nextGameMap.snakes,
            tiles: nextGameMap.tiles,
            gameSettings: nextGameMap.gameSettings,
            gameTick: nextGameMap.gameTick,
            occupiedTilesCount: nextGameMap.occupiedTilesCount,
          },
          direction,
          depth + 1,
          maxDepth,
          `${prefix}${direction.charAt(0)}`,
          panicMode,
        ).score) /
        possibleNextMoves.length;
  }

  return { score, direction };
};

module.exports({ scoreDirection, reachableTiles });
