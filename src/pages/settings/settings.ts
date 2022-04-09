import Block from '../../core/Block';
import { isFormValid, validateFieldById } from '../../utils/validation';

import './settings.css';

export class Settings extends Block {
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

      if (isValid) {
        window.location.href = `${window.location.origin}/chats`;
        console.log('formData', this.state.values);
      }
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
        oldPassword: '',
        newPassword: '',
        lastName: '',
        firstName: '',
        displayName: '',
      },
      errors: {
        email: '',
        phone: '',
        oldPassword: '',
        newPassword: '',
        lastName: '',
        firstName: '',
        displayName: '',
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
      displayNameValidation: () => {
        const { displayName } = this.state.values;
        const isDisplayNameCorrect = validateFieldById(displayName);

        const nextSate = {
          ...this.state,
          errors: {
            ...this.state.errors,
            displayName: isDisplayNameCorrect ? '' : error,
          },
        };
        this.setState(nextSate);
      },
      oldPasswordValidation: () => {
        const { oldPassword } = this.state.values;
        const isPasswordCorrect = validateFieldById(oldPassword, 'password');

        const nextSate = {
          ...this.state,
          errors: {
            ...this.state.errors,
            oldPassword: isPasswordCorrect ? '' : error,
          },
        };
        this.setState(nextSate);
      },
      newPasswordValidation: () => {
        const { newPassword } = this.state.values;
        const isPasswordCorrect = validateFieldById(newPassword, 'password');

        const nextSate = {
          ...this.state,
          errors: {
            ...this.state.errors,
            newPassword: isPasswordCorrect ? '' : error,
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
          {{{Avatar}}}
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
            placeholder="display name"
            id="displayName"
            ref="displayName"
            type="text"
            value="${values.displayName}"
            error="${errors.displayName}"
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
            placeholder="old password"
            id="oldPassword"
            ref="oldPassword"
            type="password"
            value="${values.oldPassword}"
            error="${errors.oldPassword}"
          }}}
          {{{Input
            placeholder="new password"
            id="newPassword"
            ref="newPassword"
            type="password"
            value="${values.newPassword}"
            error="${errors.newPassword}"
          }}}
          {{{Button text="Save"}}}
      </form>
    </main>
    `;
  }
}
