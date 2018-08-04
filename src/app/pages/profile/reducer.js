import * as t from './actionTypes';

export const initialState = {
  city: '',
  languages: [],
  social: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_CITY:
      return {
        ...state,
        city: action.city
      };
    case t.ADD_LANGUAGES:
      return {
        ...state,
        languages: [...action.languages]
      };
    case t.ADD_SOCIAL:
      return {
        ...state,
        social: [...action.social]
      };
    default:
      return state;
  }
};
