import * as t from './actionTypes';

export const set = logIn => {
  localStorage.setItem('logIn', `${logIn}`);
  return {
    type: t.SET,
    logIn
  };
};

export const submit = ({ email, password }) => ({
  type: t.SUBMIT,
  payload: {
    email,
    password
  }
});
