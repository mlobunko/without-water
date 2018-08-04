import * as t from './actionTypes';

export const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case t.ON:
      return true;
    case t.OFF:
      return false;
    default:
      return state;
  }
};
