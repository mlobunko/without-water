import * as t from './actionTypes';

export const addCity = city => ({
  type: t.ADD_CITY,
  city
});

export const addLanguages = languages => ({
  type: t.ADD_LANGUAGES,
  languages
});

export const addSocial = social => ({
  type: t.ADD_SOCIAL,
  social
});

export const fetch = () => ({
  type: t.FETCH
});
