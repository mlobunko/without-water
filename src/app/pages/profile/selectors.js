import { createSelector } from 'reselect';

import { NAME } from './constants';
import * as model from './model';
import components from './components';

export const getAll = state => state[NAME];

export const getCity = state => state[NAME][components.city.constants.NAME];

export const getLanguages = state =>
  state[NAME][components.languages.constants.NAME];

export const getSocial = state => state[NAME][components.social.constants.NAME];

export const getSocialWebFirst = createSelector([getSocial], social =>
  model.placeWebIconFirst(social)
);
