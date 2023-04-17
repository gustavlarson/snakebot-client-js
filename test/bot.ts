import { strict as assert } from 'assert';
import { getNextMove, reachableTiles } from '../snakepit/boa';
import { Direction } from '../src/types';
import { Coordinate, GameMap } from '../src/utils';
import { settings, test1, test10, test11, test12, test13, test14, test5, test6, test7, test8, test9 } from './data';

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

    const nextMap = map.predictNextGamemapState(Direction.Left);
    assert.equal(
      9,
      reachableTiles(nextMap, nextMap.playerSnake().headCoordinate.translateByDirection(Direction.Left), 5000),
    );
  });

  it('Regression 2', () => {
    const map = new GameMap(test6, '4cd13960-55b7-4e9e-9650-f3183dfbdf97', settings, test5.worldTick);
    const head = Coordinate.fromPosition(863, map.width);
    assert.equal(1213, reachableTiles(map, head.translateByDirection(Direction.Left), 5000));
    assert.equal(9, reachableTiles(map, head.translateByDirection(Direction.Right), 5000));
  });

  it('Regression 3', () => {
    const map = new GameMap(test7, 'd699105e-a974-451a-b23e-659f33c58057', settings, test7.worldTick);
    const head = map.playerSnake().headCoordinate;
    assert.equal(1, reachableTiles(map, head.translateByDirection(Direction.Up), 5000));
    assert.equal(1465, reachableTiles(map, head.translateByDirection(Direction.Down), 5000));
  });
});

describe('Situations', () => {
  /*
  it('situation 1', () => {
    const map = new GameMap(test1, '01f1a3c9-e695-422f-897f-602f8ecd7b78', settings, test1.worldTick);
    return getNextMove(map).then((result) => assert.equal(Direction.Down, result));
  });

  it('situation 2', () => {
    const map = new GameMap(test7, 'd699105e-a974-451a-b23e-659f33c58057', settings, test7.worldTick);
    return getNextMove(map).then((result) => assert.equal(Direction.Down, result));
  });

  it('situation 3', () => {
    const map = new GameMap(test8, 'b674f195-6b8c-4952-be13-4341e6aef0f6', settings, test8.worldTick);
    return getNextMove(map).then((result) => assert.equal(Direction.Up, result));
  });

  it('situation 9', () => {
    const map = new GameMap(test9, '3ada7837-0041-4a93-a880-460d1f5a808b', settings, test9.worldTick);
    return getNextMove(map).then((result) => assert.equal(Direction.Up, result));
  });

  it('situation 10', () => {
    const map = new GameMap(test10, '5550a0ab-fddc-4ca3-8532-4a516a6dceff', settings, test10.worldTick);
    return getNextMove(map).then((result) => assert.equal(Direction.Up, result));
  });

  it('situation 11', () => {
    const map = new GameMap(test11, 'aa40be49-153b-4a42-a514-334cc9d7fe5a', settings, test11.worldTick);
    return getNextMove(map).then((result) => assert.equal(Direction.Up, result));
  });

  it('situation 12', () => {
    const map = new GameMap(test12, 'bab5c673-968a-4279-bbd6-040814e63b24', settings, test12.worldTick);
    return getNextMove(map).then((result) => assert.equal(Direction.Left, result));
  });

  it('situation 13', () => {
    const map = new GameMap(test13, 'ce52f98b-f65a-4efe-9626-b0dc3d37ea10', settings, test13.worldTick);
    return getNextMove(map).then((result) => assert.equal(Direction.Right, result));
  });
*/
  it('situation 14', () => {
    const map = new GameMap(test14, '015afbcf-b076-4483-ae47-14fa8e58a104', settings, test14.worldTick);
    return getNextMove(map).then((result) => assert.equal(Direction.Up, result));
  });
});
