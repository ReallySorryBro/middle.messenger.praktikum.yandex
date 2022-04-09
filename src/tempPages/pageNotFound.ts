import '../css/main.css';

import { renderDOM, registerComponent } from '../core';
import PageNotFound from '../pages/pageNotFound';
import Link from '../components/link';

registerComponent(Link);

document.addEventListener('DOMContentLoaded', () => renderDOM(new PageNotFound()));
