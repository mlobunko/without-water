export const submitLogInForm = ({ email, password }) => ({
  type: "SUBMIT_LOGIN_FORM_SAGA",
  payload: {
    email,
    password
  }
});
