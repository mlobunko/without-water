import { preloadedState } from '../configureStore';

const localStorageMock = (function() {
  let store = {};
  return {
    getItem: key => store[key] || null,
    setItem: (key, value) => {
      store[key] = '' + value;
    },
    clear: () => (store = {})
  };
})();
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

beforeEach(() => {
  localStorage.clear();
});

it('should return object with authorized info', () => {
  const expectedObj = {
    authorized: true,
    logIn: '1'
  };
  localStorage.setItem('authorized', expectedObj.authorized);
  localStorage.setItem('logIn', expectedObj.logIn);
  expect(preloadedState()).toEqual(expectedObj);
});

it('should return undefined', () => {
  expect(preloadedState()).toEqual(undefined);
});
