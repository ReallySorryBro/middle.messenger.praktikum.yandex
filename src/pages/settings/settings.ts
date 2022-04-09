import Block from '../../core/Block';

import './settings.css';

// type PageNotFoundProps = {
//   links: Array<{text: string; to: string}>
// }

export class Settings extends Block {
  // constructor({links}: OnboardingPageProps) {
  //   super({links});
  // }

  render() {
    // language=hbs
    return `
    <main>
      <form class="form-wrapper">
          {{{Avatar}}}
          {{{Input id="first_name" placeholder="first name" type="text"}}}
          {{{Input placeholder="second name" id="second_name" type="text"}}}
          {{{Input placeholder="display name" id="display_name" type="text"}}}
          {{{Input placeholder="email" id="email" type="email"}}}
          {{{Input placeholder="phone" id="phone" type="text"}}}
          {{{Input placeholder="old password" id="old_password" type="password"}}}
          {{{Input placeholder="new password" id="new_password" type="password"}}}
          {{{Button text="Save"}}}
      </form>
    </main>
    `;
  }
}
