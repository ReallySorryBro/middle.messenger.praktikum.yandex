export const validateEmail = (email: string) => {
  const regexp = /^[\da-zA-Z.-_]+@[\da-zA-Z.-_]+\.[\da-zA-Z.-_]+$/;

  return regexp.test(email);
};
