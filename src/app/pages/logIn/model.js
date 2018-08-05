export const init = objBody => ({
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(objBody)
});

export const validator = (email, password) => {
  const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValidate = emailExp.test(email);

  const passwordExp = /^\w{5,16}$/;
  const passwordValidate = passwordExp.test(password);

  return {
    email: emailValidate,
    password: passwordValidate
  };
};
