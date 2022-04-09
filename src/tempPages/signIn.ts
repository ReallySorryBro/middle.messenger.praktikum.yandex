import '../css/main.css';

import { renderDOM, registerComponent } from '../core';
import SignIn from '../pages/signIn';

import Link from '../components/link';
import Input from '../components/input';
import Button from '../components/button';

registerComponent(Link);
registerComponent(Input);
registerComponent(Button);

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new SignIn());
});
