aimport { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      div{
        background-color:#000080;
        padding:8px;
        margin:16px;
        width: 400px;
      }
    `;
  }

  render() {
    return html`<a href="${this.rlink}"><span>${this.title}</span>`;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
