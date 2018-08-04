import * as t from './actionTypes';

export const logIn = () => {
  localStorage.setItem('authorized', 'true');
  return {
    type: t.LOG_IN
  };
};

export const logOut = () => {
  localStorage.removeItem('authorized');
  localStorage.removeItem('logIn');
  return {
    type: t.LOG_OUT
  };
};
