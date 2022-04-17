import Block from '../../core/Block';

import './pageNotFound.css';

export class PageNotFound extends Block {
  render() {
    // language=hbs
    return `
      <main>
        <div class='not-found-container'>
            <h1 class="not-found-error">404</h1>
            <p class="not-found-title">OOPS, SORRY WE CAN'T FIND THIS PAGE</p>
            <p class="not-found-description">Either something went wrong or the page doesn't exist</p>
            {{{Link text="Create account" href="./signIn"}}}
        </div>
      </main>
    `;
  }
}
