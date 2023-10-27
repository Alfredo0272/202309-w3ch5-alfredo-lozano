import { Component } from './components';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <header>
      <h1><img src="./pokemon-logo.svg" alt="The Pokemon logo">
    </header></h1>
    `;
  }
}
