import * as t from './actionTypes';

export const set = id => {
  localStorage.setItem('logIn', `${id}`);
  return {
    type: t.SET,
    id
  };
};

export const submit = ({ email, password }) => ({
  type: t.SUBMIT,
  payload: {
    email,
    password
  }
});
