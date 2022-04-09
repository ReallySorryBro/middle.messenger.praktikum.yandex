import '../css/main.css';

import { renderDOM, registerComponent } from '../core';
import Register from '../pages/register';

import Input from '../components/input';
import Button from '../components/button';

registerComponent(Input);
registerComponent(Button);

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Register());
});
