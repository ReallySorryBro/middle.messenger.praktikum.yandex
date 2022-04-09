import Block from '../../core/Block';

import './input.css';

interface InputProps {
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  error?: string;
  id?: string;
  name?: string;
  ref?: string;
}

export class Input extends Block {
  constructor({
    onChange = () => {},
    onFocus = () => {},
    onBlur = () => {},
    ref,
    ...rest
  }: InputProps) {
    super({
      ...rest,
      ref: ref,
      events: { input: onChange, focusin: onFocus, focusout: onBlur, },
    });
  }

  protected render(): string {
    // language=hbs
    return `
      <div>
        <input
          class="input-input"
          id="{{id}}"
          type="{{type}}"
          placeholder="{{placeholder}}"
          name="{{name}}"
          ref="{{ref}}"
          value="{{value}}"
        />
        <div class="input-error">{{#if error}}{{error}}{{/if}}</div>
      </div>
    `;
  }
}
