import { strict as assert } from 'assert';
import { getNextMove, reachableTiles } from '../snakepit/bot';
import { Direction } from '../src/types';
import { Coordinate, GameMap } from '../src/utils';
import { settings, test1, test2, test3, test4, test5, test6 } from './data';

describe('Reachable tiles', () => {
  it('Basic case', () => {
    const map = new GameMap(test1, '01f1a3c9-e695-422f-897f-602f8ecd7b78', settings, test1.worldTick);
    const move = new Coordinate(1, 1);
    assert.equal(1389, reachableTiles(map, move, 5000));
    assert.equal(200, reachableTiles(map, move, 200));
  });

  it('Regression 1', () => {
    const map = new GameMap(test5, '18209701-b055-4d83-bb75-a18126b26128', settings, test5.worldTick);
    const head = Coordinate.fromPosition(494, map.width);
    assert.equal(1343, reachableTiles(map, head.translateByDirection(Direction.Up), 5000));
    assert.equal(10, reachableTiles(map, head.translateByDirection(Direction.Left), 5000));

    const nextMap = map.clone();
    nextMap.setPlayerSnakeHead(head.translateByDirection(Direction.Left));
    assert.equal(
      9,
      reachableTiles(nextMap, nextMap.playerSnake.headCoordinate.translateByDirection(Direction.Left), 5000),
    );
  });

  it('Regression 2', () => {
    const map = new GameMap(test6, '4cd13960-55b7-4e9e-9650-f3183dfbdf97', settings, test5.worldTick);
    const head = Coordinate.fromPosition(863, map.width);
    assert.equal(1213, reachableTiles(map, head.translateByDirection(Direction.Left), 5000));
    assert.equal(9, reachableTiles(map, head.translateByDirection(Direction.Right), 5000));
  });
});

describe('Situations', () => {
  it('situation 1', () => {
    const map = new GameMap(test1, '01f1a3c9-e695-422f-897f-602f8ecd7b78', settings, test1.worldTick);
    return getNextMove(map).then((result) => assert.equal(Direction.Down, result));
  });
});
