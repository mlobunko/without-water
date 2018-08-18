import * as t from './actionTypes';

export const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case t.LOG_IN:
      return true;
    case t.LOG_OUT:
      return false;
    default:
      return state;
  }
};
