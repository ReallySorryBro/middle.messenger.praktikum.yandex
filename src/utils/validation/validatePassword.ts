export const validatePassword = (password: string) => {
  const regexp = /^(?=.*[A-Za-z\.\-\_])(?=.*\d)[A-Za-z\d\.\-\_]{8,40}$/;

  return regexp.test(password);
};
