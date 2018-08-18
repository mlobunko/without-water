import { logIn, logOut } from '../actions';
import * as t from '../actionTypes';

const localStorageMock = (function() {
  return {
    setItem: jest.fn(),
    clear: jest.fn()
  };
})();
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('logIn action creater', () => {
  it('should call localStorage.setItem', () => {
    logIn();
    expect(localStorage.setItem).toHaveBeenCalledWith('authorized', 'true');
  });

  it('should return an action', () => {
    const expectedAction = {
      type: t.LOG_IN
    };
    expect(logIn()).toEqual(expectedAction);
  });
});

describe('logOut action creater', () => {
  it('should call localStorage.clear', () => {
    logOut();
    expect(localStorage.clear).toHaveBeenCalledTimes(1);
  });

  it('should return an action', () => {
    const expectedAction = {
      type: t.LOG_OUT
    };
    expect(logOut()).toEqual(expectedAction);
  });
});
