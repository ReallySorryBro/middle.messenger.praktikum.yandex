import { renderDOM, registerComponent } from '../core';

import PageNotFound from '../pages/pageNotFound';
import ErrorPage from '../pages/errorPage';
import SignIn from '../pages/signIn';
import Register from '../pages/register';
import Settings from '../pages/settings';
import Chats from '../pages/chats';
 
import Button from '../components/button';
import Message from '../components/message';
import Avatar from '../components/avatar';
import Link from '../components/link';
import Input from '../components/input';

registerComponent(Button);
registerComponent(Message);
registerComponent(Avatar);
registerComponent(Link);
registerComponent(Input);

document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop();
  let App = null;

  switch (page) {
    case 'errorPage':
      App = new ErrorPage();
      break;
    case 'settings':
      App = new Settings();
      break;
    case 'chats':
      App = new Chats({
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
      });
      break;
    case 'register':
      App = new Register();
      break;
    case 'signIn':
      App = new SignIn();
      break;
    default:
      App = new PageNotFound();
      break;
  }

  renderDOM(App);
});
