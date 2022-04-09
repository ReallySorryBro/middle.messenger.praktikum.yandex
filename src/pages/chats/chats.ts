import Block from '../../core/Block';
import { isNotEmpty, isFormValid } from '../../utils/validation';

import './chats.css';

interface MessageProps {
  isMine: boolean;
  text: string;
}

type ChatsProps = {
  chatsData: MessageProps[];
  messages: MessageProps[];
};

export class Chats extends Block {
  constructor(props: ChatsProps) {
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
        this.state.messageValidation();
      }
    };
    const handleSubmit = (e: Event) => {
      const isValid = isFormValid(this.state.errors, this.state.values);

      e.preventDefault();
      this.state.messageValidation();

      if (isValid) window.location.href = `${window.location.origin}/chats`;
    };
    super({
      ...props,
      events: {
        input: handleChange,
        focusin: onFocus,
        focusout: onBlur,
        submit: handleSubmit,
      },
    });
  }
  protected getStateFromProps(): void {
    const error = `start typing`;

    this.state = {
      values: {
        message: '',
      },
      errors: {
        message: '',
      },
      messageValidation: () => {
        const { message } = this.state.values;

        const nextSate = {
          ...this.state,
          errors: {
            ...this.state.errors,
            message: isNotEmpty(message) ? '' : error,
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
      <div class="chats">
          <div class='all-chats'>
            {{#each chatsData}}
              {{#with this}}
                {{{Message text="{{text}}"}}}
              {{/with}}
            {{/each}}
          </div>
          <div class='chat'>
            {{#each messages}}
              {{#with this}}
                {{{Message text="{{text}}"}}}
              {{/with}}
            {{/each}}
              <form>
                {{{Input
                  placeholder="start typing"
                  id="message"
                  type="text"
                  ref="message"
                  value="${values.message}"
                  error="${errors.message}"
                }}}
                {{{Button text="send"}}}
              </form>
          </div>
      </div>
    </main>
    `;
  }
}
