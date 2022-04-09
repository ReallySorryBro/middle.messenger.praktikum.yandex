import Block from '../../core/Block';

import './button.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export class Button extends Block {
  constructor({ text, onClick = () => {} }: ButtonProps) {
    super({ text, events: { click: onClick } });
  }

  protected render(): string {
    // language=hbs
    return `
    <div class='main-button-wrapper'>
      <button class='main-button'>
        <div class='main-button-span'>
          {{text}}
        </div>
      </button>
    </div>
    `;
  }
}
