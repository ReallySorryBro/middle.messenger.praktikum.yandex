import Block from '../../core/Block';

import './avatar.css';

export class Avatar extends Block {
  render() {
    // language=hbs
    return `
      <div class="form-avatar-wrapper">
        <div id="avatar" class="form-avatar">
      </div>
    `;
  }
}
