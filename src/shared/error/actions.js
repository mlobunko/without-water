import * as t from './actionTypes';

export const setLogin = error => ({
  type: t.SET_LOGIN,
  error
});

export const setServer = error => ({
  type: t.SET_SERVER,
  error
});

export const setNull = error => ({
  type: t.SET_NULL,
  error
});
