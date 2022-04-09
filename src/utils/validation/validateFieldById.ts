import { validateEmail } from './validateEmail';
import { validateLogin } from './validateLogin';
import { validateMessage } from './validateMessage';
import { validateName } from './validateName';
import { validatePassword } from './validatePassword';
import { validatePhone } from './validatePhone';

export const validateFieldById = (field: string, id: string) => {
  switch (id) {
    case 'password':
      return validatePassword(field);
    case 'phone':
      return validatePhone(field);
    case 'mail':
      return validateEmail(field);
    case 'login':
      return validateLogin(field);
    case 'message':
      return validateMessage(field);
    default:
      return validateName(field);
  }
};
