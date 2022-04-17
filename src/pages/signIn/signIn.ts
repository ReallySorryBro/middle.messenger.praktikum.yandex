import Block from '../../core/Block';
import { getNextState } from '../../utils/data';
import { isFormValid } from '../../utils/validation';

import './signIn.css';

export class SignIn extends Block {
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
        login: '',
        password: '',
      },
      errors: {
        login: '',
        password: '',
      },
      loginValidation: () => {
        const nextState = getNextState(this.state, 'login');

        this.setState(nextState);
      },
      passwordValidation: () => {
        const nextState = getNextState(this.state, 'password');

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
          <h4 class="form-title">Sign in to MessegusO</h4>
          {{{Input
            placeholder="login"
            id="login"
            ref="login"
            value="${values.login}"
            error="${errors.login}"
          }}}
          {{{Input
            type="password"
            ref="password"
            value="${values.password}"
            error="${errors.password}"
            placeholder="password"
            id="password"
          }}}
          {{{Link text="register" href="./register"}}}
          {{{Button text="Create account" to="chats"}}}
      </form>
    </main>
    `;
  }
}
