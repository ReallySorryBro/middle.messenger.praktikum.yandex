import Block from '../../core/Block';
import { validateEmail, validateName, validatePassword, validatePhone } from '../../utils/validation';

import './register.css';

export class Register extends Block {
  protected getStateFromProps() {
    this.state = {
      values: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
      },
      errors: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
      },
      onRegister: () => {
        const registerData = {
          firstName: (this.refs.firstName.firstElementChild as HTMLInputElement)
            .value,
          lastName: (this.refs.lastName.firstElementChild as HTMLInputElement)
            .value,
          password: (this.refs.password.firstElementChild as HTMLInputElement)
            .value,
          phone: (this.refs.phone.firstElementChild as HTMLInputElement).value,
          email: (this.refs.email.firstElementChild as HTMLInputElement).value,
        };

        const nextState = {
          errors: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            password: '',
          },
          values: { ...registerData },
        };
        const passwordEval = validatePassword(registerData.password);
        const mailEval = validateEmail(registerData.email);
        const phoneEval = validatePhone(registerData.phone);
        const firstNameEval = validateName(registerData.firstName);
        const lastNameEval = validateName(registerData.lastName);
        const errorText = 'field doesn`\t meet the requirements';

        if (!passwordEval) {
          nextState.errors.password = errorText;
        }
        if (!firstNameEval) {
          nextState.errors.firstName = errorText;
        }
        if (!lastNameEval) {
          nextState.errors.lastName = errorText;
        }
        if (!phoneEval) {
          nextState.errors.phone = errorText;
        }
        if (!mailEval) {
          nextState.errors.email = errorText;
        }
        if (passwordEval && phoneEval && mailEval && firstNameEval && lastNameEval) {
          window.location.href = `${window.location.origin}/chats`;
        }

        this.setState(nextState);
      },
    };
  }
  render() {
    const { errors, values } = this.state;

    // language=hbs
    return `
    <main>
      <form class="form-wrapper">
          <h4 class="form-title">Register to MessegusO</h4>
          {{{Input
            placeholder="first name"
            id="first_name"
            ref="firstName"
            type="text"
            value="${values.firstName}"
            error="${errors.firstName}"
          }}}
          {{{Input
            placeholder="last name"
            id="last_name"
            ref="lastName"
            type="text"
            value="${values.lastName}"
            error="${errors.lastName}"
          }}}
          {{{Input
            placeholder="email"
            id="email"
            ref="email"
            type="text"
            value="${values.email}"
            error="${errors.email}"
          }}}
          {{{Input
            placeholder="phone"
            id="phone"
            ref="phone"
            type="text"
            value="${values.phone}"
            error="${errors.phone}"
          }}}
          {{{Input
            placeholder="password"
            id="password"
            ref="password"
            type="password"
            value="${values.password}"
            error="${errors.password}"
          }}}
          {{{Button text="Create account" onClick=onRegister }}}
      </form>
    </main>
    `;
  }
}
