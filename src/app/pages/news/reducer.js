import * as t from './actionTypes';

export const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case t.ADD:
      return [...action.news];
    default:
      return state;
  }
};
