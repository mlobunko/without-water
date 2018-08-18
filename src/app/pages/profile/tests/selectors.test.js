import { NAME } from '../constants';
import city from '../components/city';
import languages from '../components/languages';
import social from '../components/social';

import {
  getAll,
  getCity,
  getLanguages,
  getSocial,
  getSocialWebFirst
} from '../selectors';

const initialState = {
  [NAME]: {
    [city.constants.NAME]: 'London',
    [languages.constants.NAME]: ['english'],
    [social.constants.NAME]: [
      { label: 'fb', link: '123' },
      { label: 'web', link: '321' }
    ]
  }
};

describe('getAll', () => {
  it('should return right state', () => {
    const state = {
      [NAME]: 'true'
    };
    expect(getAll(state)).toEqual(state[NAME]);
  });
});

describe('getCity', () => {
  it('should return right state', () => {
    const state = {
      ...initialState
    };
    expect(getCity(state)).toEqual(state[NAME][city.constants.NAME]);
  });
});

describe('getLanguages', () => {
  it('should return right state', () => {
    const state = {
      ...initialState
    };
    expect(getLanguages(state)).toEqual(state[NAME][languages.constants.NAME]);
  });
});

describe('getSocial', () => {
  it('should return right state', () => {
    const state = {
      ...initialState
    };
    expect(getSocial(state)).toEqual(state[NAME][social.constants.NAME]);
  });
});

describe('getSocialWebFirst', () => {
  it('return web first', () => {
    const expectedState = [
      { label: 'web', link: '321' },
      { label: 'fb', link: '123' }
    ];
    expect(getSocialWebFirst(initialState)).toEqual(expectedState);
  });
});
