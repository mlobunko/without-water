import * as t from './actionTypes';

export const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case t.SET:
      return action.logIn;
    default:
      return state;
  }
};
