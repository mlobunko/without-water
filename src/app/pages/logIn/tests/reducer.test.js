import * as t from '../actionTypes';
import reducer, { initialState } from '../reducer';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${t.SET}`, () => {
    const logIn = 2;
    const action = {
      type: t.SET,
      logIn
    };
    expect(reducer(undefined, action)).toEqual(logIn);
  });
});
