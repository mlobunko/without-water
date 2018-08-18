import * as t from '../actionTypes';
import { add, fetch } from '../actions';

describe('add action creater', () => {
  it('return action', () => {
    const news = '123';
    const expectedAction = {
      type: t.ADD,
      news
    };
    expect(add(news)).toEqual(expectedAction);
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
