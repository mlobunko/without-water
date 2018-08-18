import reducer, { initialState } from '../reducer';
import * as t from '../actionTypes';
import { NAME } from '../constants';

describe(`${NAME} reducer`, () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${t.SET_LOGIN}`, () => {
    const error = '123';
    const action = {
      type: t.SET_LOGIN,
      error
    };
    const expectedState = {
      ...initialState,
      isError: true,
      loginError: error
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it(`should handle ${t.SET_SERVER}`, () => {
    const error = '312';
    const action = {
      type: t.SET_SERVER,
      error
    };
    const expectedState = {
      ...initialState,
      isError: true,
      serverError: error
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it(`should handle ${t.SET_NULL}`, () => {
    const action = {
      type: t.SET_NULL
    };
    const expectedState = {
      isError: false,
      serverError: '',
      loginError: ''
    };
    const initialState = {
      isError: true,
      serverError: '312',
      loginError: ''
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
