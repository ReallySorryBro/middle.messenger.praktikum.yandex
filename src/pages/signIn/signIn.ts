import Block from '../../core/Block';
import { validateLogin, validatePassword } from '../../utils/validation';

import './signIn.css';

export class SignIn extends Block {
  constructor() {
    const onChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target) {
        this.state.values[target.name] = target.value;
      }
    };
    const onBlur = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target) {
        this.state.validators[target.name]();
      }
    };
    const onFocus = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target) {
        this.state.errors[target.name] = '';
      }
    };
    const onSubmit = (e: Event) => {
      this.validate();
      console.log('/changedata', this.state.values);
      e.preventDefault();
    };
    super({
      events: {
        input: onChange,
        focusin: onFocus,
        focusout: onBlur,
        submit: onSubmit,
      },
    });
  }
  validate() {
    Object.values(this.state.validators).forEach(value => {
      (value as () => void)();
    });
  }
  protected getStateFromProps(): void {
    const error = 'nope';
    this.state = {
      values: {
        login: '',
        password: '',
      },
      errors: {
        login: '',
        password: '',
      },

      validators: {
        login: () => {
          const validationResult = validateLogin(this.state.values.login);
          if (!validationResult) {
            this.state.errors.login = error;
          } else {
            this.state.errors.login = '';
          }
          this.setState(this.state);
        },
        password: () => {
          const nextSate = { ...this.state };
          const validationResult = validatePassword(this.state.values.password);

          if (!validationResult) {
            nextSate.errors.password = error;
          } else {
            nextSate.errors.password = '';
          }
          this.setState(nextSate);
        },
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
            name="login"
            ref="login"
            value="${values.login}"
            error="${errors.login}"
          }}}
          {{{Input
            type="password"
            name="password"
            ref="password"
            value="${values.password}"
            error="${errors.password}"
            placeholder="password"
            id="password"
          }}}
          {{{Link text="register" href="./register"}}}
          {{{Button text="Create account" to="chats" onClick=onLogin }}}
      </form>
    </main>
    `;
  }
}
