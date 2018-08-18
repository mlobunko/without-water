import reducer, { initialState } from '../reducer';
import * as t from '../actionTypes';
import { NAME } from '../constants';

describe(`${NAME} reducer`, () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState);
  });

  it(`should handle ${t.LOG_IN}`, () => {
    const initialState = false;
    const action = {
      type: t.LOG_IN
    };
    expect(reducer(initialState, action)).toEqual(true);
  });

  it(`should handle ${t.LOG_OUT}`, () => {
    const initialState = true;
    const action = {
      type: t.LOG_OUT
    };
    expect(reducer(initialState, action)).toEqual(false);
  });
});
