import { strict as assert } from 'assert';
import { getNextMove } from '../snakepit/bot';
import { Direction } from '../src/types';
import { GameMap } from '../src/utils';
import { settings, test1, test2 } from './data';

describe('Situations', () => {
  it('situation 1', () => {
    const map = new GameMap(test1, '01f1a3c9-e695-422f-897f-602f8ecd7b78', settings, test1.worldTick);
    return getNextMove(map).then((result) => assert.equal(Direction.Down, result));
  });

  it('situation 2', () => {
    const map = new GameMap(test2, 'c83c381f-a312-4827-a594-6b60686f379a', settings, test2.worldTick);
    return getNextMove(map).then((result) => {
      console.log('RESULT', result);
      assert.equal(Direction.Right, result);
    });
  });
});
