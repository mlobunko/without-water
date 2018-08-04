export const init = objBody => ({
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(objBody)
});

export const validateEmail = email => {
  const regularExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regularExp.test(email);
};
