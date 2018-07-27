export const setErrorLogin = error => ({
  type: "SET_ERROR_LOGIN",
  payload: {
    error
  }
});

export const setErrorServer = error => ({
  type: "SET_ERROR_SERVER",
  payload: {
    error
  }
});

export const setErrorsToNull = () => ({
  type: "SET_ERRORS_TO_NULL"
});
