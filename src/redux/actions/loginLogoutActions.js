export const logOut = () => {
  localStorage.setItem("authenticated", "false");
  localStorage.setItem("id", "");
  return {
    type: "LOG_OUT"
  };
};

export const logIn = () => {
  localStorage.setItem("authenticated", "true");
  return {
    type: "LOG_IN"
  };
};

export const setId = id => {
  localStorage.setItem("id", "" + id);
  return {
    type: "SET_ID",
    payload: {
      id
    }
  };
};
