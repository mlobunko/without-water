import * as t from '../actionTypes';
import { NAME } from '../constants';
import reducer, { initialState } from '../reducer';

describe(`${NAME} reducer`, () => {
  it('should retun initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${t.ADD}`, () => {
    const news = ['1', '2', '3'];
    const action = {
      type: t.ADD,
      news
    };
    const expectedState = [...news];
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
