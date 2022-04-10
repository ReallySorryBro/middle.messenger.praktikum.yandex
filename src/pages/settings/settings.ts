import Block from '../../core/Block';
import { getNextState } from '../../utils/data';
import { isFormValid } from '../../utils/validation';

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
        const nextState = getNextState(this.state, 'email');

        this.setState(nextState);
      },
      firstNameValidation: () => {
        const nextState = getNextState(this.state, 'firstName');

        this.setState(nextState);
      },
      lastNameValidation: () => {
        const nextState = getNextState(this.state, 'lastName');

        this.setState(nextState);
      },
      displayNameValidation: () => {
        const nextState = getNextState(this.state, 'displayName');

        this.setState(nextState);
      },
      oldPasswordValidation: () => {
        const nextState = getNextState(this.state, 'oldPassword');

        this.setState(nextState);
      },
      newPasswordValidation: () => {
        const nextState = getNextState(this.state, 'newPassword');

        this.setState(nextState);
      },
      phoneValidation: () => {
        const nextState = getNextState(this.state, 'phone');

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
