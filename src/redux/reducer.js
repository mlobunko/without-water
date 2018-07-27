export const defaultSettings = {
  id: "",
  authenticated: false,
  fetching: false,
  news: [],
  city: "",
  languages: [],
  social: [],
  isError: false,
  errors: {
    serverError: "",
    loginError: ""
  }
};

export default (state = defaultSettings, action) => {
  switch (action.type) {
    case "SET_ID":
      return {
        ...state,
        id: action.payload.id
      };
    case "LOG_IN":
      return {
        ...state,
        authenticated: true
      };
    case "LOG_OUT":
      return {
        ...state,
        authenticated: false
      };
    case "ADD_NEWS":
      return {
        ...state,
        news: [...action.payload]
      };
    case "SET_CITY":
      return {
        ...state,
        city: action.payload
      };
    case "SET_LANGUAGES":
      return {
        ...state,
        languages: [...action.payload]
      };
    case "SET_SOCIAL":
      return {
        ...state,
        social: [...action.payload]
      };
    case "FETCHING_ON":
      return {
        ...state,
        fetching: true
      };
    case "FETCHING_OFF":
      return {
        ...state,
        fetching: false
      };
    case "SET_ERROR_LOGIN":
      return {
        ...state,
        isError: true,
        errors: {
          ...state.errors,
          loginError: action.payload.error
        }
      };
    case "SET_ERROR_SERVER":
      return {
        ...state,
        isError: true,
        errors: {
          ...state.errors,
          serverError: action.payload.error
        }
      };
    case "SET_ERRORS_TO_NULL":
      return {
        ...state,
        isError: false,
        errors: {
          serverError: "",
          loginError: ""
        }
      };

    default:
      return state;
  }
};
