import '../css/main.css';

import { renderDOM, registerComponent } from '../core';
import Chats from '../pages/chats';

import Input from '../components/input';
import Button from '../components/button';
import Message from '../components/message';

registerComponent(Button);
registerComponent(Input);
registerComponent(Message);

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(
    new Chats({
      chatsData: [
        {
          text: 'hope to see you soon',
          isMine: false,
        },
        {
          text: 'mmmmmm no',
          isMine: false,
        },
        {
          text: 'what about pizza tomorrow?',
          isMine: true,
        },
      ],
      messages: [
        {
          isMine: false,
          text: 'A',
        },
        {
          isMine: true,
          text: 'B',
        },
        {
          isMine: false,
          text: 'C',
        },
        {
          isMine: true,
          text: 'D',
        },
      ],
    })
  );
});
