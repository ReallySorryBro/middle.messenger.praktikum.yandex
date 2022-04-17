import Block from '../../core/Block';

import './message.css';

interface MessageProps {
  text: string;
}

export class Message extends Block {
  static componentName = 'Message';

  constructor(props: MessageProps) {
    super(props);
  }

  render() {
    // language=hbs
    return `
      <div class='chat-preview'>
        {{{Avatar}}}
        <p class='chat-text'>{{text}}</p>
      </div>
    `;
  }
}
