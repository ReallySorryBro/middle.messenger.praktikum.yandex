import '../css/main.css';

import { renderDOM, registerComponent } from '../core';
import Settings from '../pages/settings';

import Input from '../components/input';
import Avatar from '../components/avatar';
import Button from '../components/button';

registerComponent(Input);
registerComponent(Avatar);
registerComponent(Button);

document.addEventListener('DOMContentLoaded', () => renderDOM(new Settings()));
