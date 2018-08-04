import * as t from './actionTypes';

export const add = news => ({
  type: t.ADD,
  news
});

export const fetch = () => ({
  type: t.FETCH
});
