import Block from '../../core/Block';

import './chats.css';

interface MessageProps {
  isMine: boolean;
  text: string;
}

type ChatsProps = {
  chatsData: MessageProps[];
  messages: MessageProps[]
}


export class Chats extends Block {
  constructor(props: ChatsProps) {
    super(props);
  }

  render() {
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
                {{{Input placeholder="start typing" id="message" type="text"}}}
              </form>
          </div>
      </div>
    </main>
    `;
  }
}
