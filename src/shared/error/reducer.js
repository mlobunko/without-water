import * as t from './actionTypes';

const initialState = {
  isError: false,
  loginError: '',
  serverError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.SET_LOGIN:
      return {
        ...state,
        isError: true,
        loginError: action.error
      };
    case t.SET_SERVER:
      return {
        ...state,
        isError: true,
        serverError: action.error
      };
    case t.SET_NULL:
      return {
        ...state,
        isError: false,
        loginError: '',
        serverError: ''
      };
    default:
      return state;
  }
};
