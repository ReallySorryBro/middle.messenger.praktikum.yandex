import Block from '../../core/Block';

import './link.css';

interface LinkProps {
  text: string;
  href: string;
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super(props);
  }

  render() {
    // language=hbs
    return `<a href={{href}} class='main-link'>{{text}}</a>`;
  }
}