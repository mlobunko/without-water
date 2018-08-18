import * as t from '../actionTypes';
import { NAME } from '../constants';
import reducer, { initialState } from '../reducer';

describe(`${NAME} reducer`, () => {
  it('return default state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`handle ${t.ADD_CITY} action`, () => {
    const city = 'London';
    const action = {
      type: t.ADD_CITY,
      city
    };
    const expectedState = {
      ...initialState,
      city
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it(`handle ${t.ADD_LANGUAGES} action`, () => {
    const languages = ['english'];
    const action = {
      type: t.ADD_LANGUAGES,
      languages
    };
    const expectedState = {
      ...initialState,
      languages
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it(`handle ${t.ADD_SOCIAL} action`, () => {
    const social = ['web'];
    const action = {
      type: t.ADD_SOCIAL,
      social
    };
    const expectedState = {
      ...initialState,
      social
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
