import { validateEmail } from './validateEmail';
import { validateLogin } from './validateLogin';
import { validateName } from './validateName';
import { validatePassword } from './validatePassword';
import { validatePhone } from './validatePhone';

export const validateFieldById = (field: string, id?: string) => {
  switch (id) {
    case 'password':
      return validatePassword(field);
    case 'phone':
      return validatePhone(field);
    case 'email':
      return validateEmail(field);
    case 'login':
      return validateLogin(field);
    default:
      return validateName(field);
  }
};
