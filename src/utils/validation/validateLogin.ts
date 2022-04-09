import { isNotEmpty } from './isNotEmpty';

export const validateLogin = (login: string) => {
  const res = /[\w]{3,20}/gi.test(login);

  return res && String(Number(login)) !== login && isNotEmpty(login);
};
