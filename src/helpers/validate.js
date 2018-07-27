export const validateEmail = email => {
  const regularExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regularExp.test(email);
};
