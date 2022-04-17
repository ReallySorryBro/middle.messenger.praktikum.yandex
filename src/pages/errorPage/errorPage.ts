import Block from '../../core/Block';

import './errorPage.css';

export class ErrorPage extends Block {
  render() {
    // language=hbs
    return `
      <main>
        <div class='not-found-container'>
            <p class="not-found-title">SOMETHING WENT WRONG</p>
            <p class="not-found-description">We're already looking for a solution</p>
            {{{Link text="Create account" href="./pageNotFound"}}}
        </div>
      </main>
    `;
  }
}
