import { createSelector } from 'reselect';

import { NAME } from './constants';
import * as model from './model';
import city from './components/city';
import languages from './components/languages';
import social from './components/social';

export const getAll = state => state[NAME];

export const getCity = state => state[NAME][city.constants.NAME];

export const getLanguages = state => state[NAME][languages.constants.NAME];

export const getSocial = state => state[NAME][social.constants.NAME];

export const getSocialWebFirst = createSelector([getSocial], social =>
  model.placeWebIconFirst(social)
);
