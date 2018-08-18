import { addCity, addLanguages, addSocial, fetch } from '../actions';
import * as t from '../actionTypes';

describe('addCity action creater', () => {
  it('return action', () => {
    const city = 'London';
    const expectedAction = {
      type: t.ADD_CITY,
      city
    };
    expect(addCity(city)).toEqual(expectedAction);
  });
});

describe('addLanguages action creater', () => {
  it('return action', () => {
    const languages = ['english'];
    const expectedAction = {
      type: t.ADD_LANGUAGES,
      languages
    };
    expect(addLanguages(languages)).toEqual(expectedAction);
  });
});

describe('addSocial action creater', () => {
  it('return action', () => {
    const social = ['english'];
    const expectedAction = {
      type: t.ADD_SOCIAL,
      social
    };
    expect(addSocial(social)).toEqual(expectedAction);
  });
});

describe('fetch action creater', () => {
  it('return action', () => {
    const expectedAction = {
      type: t.FETCH
    };
    expect(fetch()).toEqual(expectedAction);
  });
});
