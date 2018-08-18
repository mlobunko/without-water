import * as t from '../actionTypes';
import reducer, { initialState } from '../reducer';
import { NAME } from '../constants';

describe(`${NAME} reducer`, () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${t.ON}`, () => {
    const initialState = false;
    const action = {
      type: t.ON
    };
    expect(reducer(initialState, action)).toEqual(true);
  });

  it(`should handle ${t.OFF}`, () => {
    const initialState = true;
    const action = {
      type: t.OFF
    };
    expect(reducer(initialState, action)).toEqual(false);
  });
});
