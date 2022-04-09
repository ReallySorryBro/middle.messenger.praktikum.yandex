export const validateName = (name: string) => {
  const regexp = /^[A-ZА-Я][а-яА-Яa-zA-Z\-]*$/;

  return regexp.test(name);
};
