import Block from '../../core/Block';

import './input.css';

interface InputProps {
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  error?: string;
  id?: string;
  name?: string;
  ref?: string;
}

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  protected render(): string {
    // language=hbs
    return `
      <div>
        <input
          class="input-input {{#if error}}error{{else}}valid{{/if}}"
          id="{{id}}"
          type="{{type}}"
          placeholder="{{placeholder}}"
          name="{{name}}"
          ref="{{ref}}"
          value="{{value}}"
        />
        {{#if error}}<div class="input-error">{{error}}</div>{{/if}}
      </div>
    `;
  }
}
