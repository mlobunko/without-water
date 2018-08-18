import * as t from '../actionTypes';
import { on, off } from '../actions';

describe('on action creater', () => {
  it('should return an action', () => {
    const expectedAction = {
      type: t.ON
    };
    expect(on()).toEqual(expectedAction);
  });
});

describe('off action creater', () => {
  it('should return an action', () => {
    const expectedAction = {
      type: t.OFF
    };
    expect(off()).toEqual(expectedAction);
  });
});
