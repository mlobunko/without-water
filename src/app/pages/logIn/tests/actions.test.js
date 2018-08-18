import * as t from '../actionTypes';
import { set, submit } from '../actions';

describe('set', () => {
  const localStorageMock = (function() {
    return {
      setItem: jest.fn(),
      clear: jest.fn()
    };
  })();
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
  });

  it('call localstorage.setItem', () => {
    set(4);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it('return action', () => {
    const logIn = 2;
    const expectedAction = {
      type: t.SET,
      logIn
    };
    expect(set(2)).toEqual(expectedAction);
  });
});

describe('submit', () => {
  it('return action', () => {
    const payload = {
      email: '123',
      password: '321'
    };
    const expectedAction = {
      type: t.SUBMIT,
      payload
    };
    expect(submit(payload)).toEqual(expectedAction);
  });
});
