import '../css/main.css';

import { renderDOM, registerComponent } from '../core';
import ErrorPage from '../pages/errorPage';
import Link from '../components/link';

registerComponent(Link);

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new ErrorPage());
});
