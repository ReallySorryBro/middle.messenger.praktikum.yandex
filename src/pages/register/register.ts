import Block from '../../core/Block';
import { validateFieldById, isFormValid } from '../../utils/validation';

import './register.css';

export class Register extends Block {
  constructor() {
    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement;

      if (target) {
        this.state.values[target.id] = target.value;
      }
    };
    const onFocus = (e: Event) => {
      const target = e.target as HTMLInputElement;

      if (target) {
        this.state.errors[target.id] = '';
      }
    };
    const onBlur = (e: Event) => {
      const target = e.target as HTMLInputElement;

      if (target) {
        this.validate(target.id);
      }
    };
    const handleSubmit = (e: Event) => {
      const isValid = isFormValid(this.state.errors, this.state.values);

      e.preventDefault();
      this.validate();

      if (isValid) window.location.href = `${window.location.origin}/chats`;
    };
    super({
      events: {
        input: handleChange,
        focusin: onFocus,
        focusout: onBlur,
        submit: handleSubmit,
      },
    });
  }
  validate(id?: string) {
    if (id) {
      this.state[`${id}Validation`]();
    } else {
      Object.keys(this.state.values).forEach(value => {
        this.state[`${value}Validation`]();
      });
    }
  }
  protected getStateFromProps(): void {
    const error = `the field doeesn't match the requirements`;

    this.state = {
      values: {
        email: '',
        phone: '',
        password: '',
        lastName: '',
        firstName: '',
      },
      errors: {
        email: '',
        phone: '',
        password: '',
        lastName: '',
        firstName: '',
      },
      emailValidation: () => {
        const { email } = this.state.values;
        const isEmailCorrect = validateFieldById(email, 'email');

        const nextSate = {
          ...this.state,
          errors: {
            ...this.state.errors,
            email: isEmailCorrect ? '' : error,
          },
        };
        this.setState(nextSate);
      },
      firstNameValidation: () => {
        const { firstName } = this.state.values;
        const isFirstNameCorrect = validateFieldById(firstName);

        const nextSate = {
          ...this.state,
          errors: {
            ...this.state.errors,
            firstName: isFirstNameCorrect ? '' : error,
          },
        };
        this.setState(nextSate);
      },
      lastNameValidation: () => {
        const { lastName } = this.state.values;
        const isLastNameCorrect = validateFieldById(lastName);

        const nextSate = {
          ...this.state,
          errors: {
            ...this.state.errors,
            lastName: isLastNameCorrect ? '' : error,
          },
        };
        this.setState(nextSate);
      },
      passwordValidation: () => {
        const { password } = this.state.values;
        const isPasswordCorrect = validateFieldById(password, 'password');

        const nextSate = {
          ...this.state,
          errors: {
            ...this.state.errors,
            password: isPasswordCorrect ? '' : error,
          },
        };
        this.setState(nextSate);
      },
      phoneValidation: () => {
        const { phone } = this.state.values;
        const isPhoneCorrect = validateFieldById(phone, 'phone');

        const nextSate = {
          ...this.state,
          errors: {
            ...this.state.errors,
            phone: isPhoneCorrect ? '' : error,
          },
        };
        this.setState(nextSate);
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
            id="firstName"
            ref="firstName"
            type="text"
            value="${values.firstName}"
            error="${errors.firstName}"
          }}}
          {{{Input
            placeholder="last name"
            id="lastName"
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
