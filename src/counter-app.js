import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {
  static get tag() {
    return 'counter-app';
  }
  constructor() {
    super();
    this.title = 'counter';
  }
  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }

      span{
        background-color:blue;
        color:white;
        font-size: 24px;
        padding:16px;
        margin:8px;
      }

      span:hover{
        background-color:grey;
        border: 1px solid black;
      }
    `;
  }

  render() {
    return html`
    <h1>Title</h1>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: {type: String}, 
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);
