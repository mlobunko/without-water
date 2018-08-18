import { setLogin, setServer, setNull } from '../actions';
import * as t from '../actionTypes';

describe('setLogin action creater', () => {
  it('should return an action', () => {
    const error = '123';
    const expectedAction = {
      type: t.SET_LOGIN,
      error
    };
    expect(setLogin(error)).toEqual(expectedAction);
  });
});

describe('setServer action creater', () => {
  it('should return an action', () => {
    const error = '321';
    const expectedAction = {
      type: t.SET_SERVER,
      error
    };
    expect(setServer(error)).toEqual(expectedAction);
  });
});

describe('setNull action creater', () => {
  it('should return an action', () => {
    const expectedAction = {
      type: t.SET_NULL
    };
    expect(setNull()).toEqual(expectedAction);
  });
});
