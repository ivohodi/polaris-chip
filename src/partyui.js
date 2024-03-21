import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class PartyUI extends LitElement {
  
  static get tag() {
    return 'party-ui';
  }
  constructor() {
    super();
  }
  static get styles() {
    return css`
      :host{
        display:inline-flex;
        background-color:var(--ddd-theme-default-beaverBlue);
      }
    `;
  }

  render() {
    return html`
    <div>PARTY-UI</div>
   
    `;
  }

  static get properties() {
    return {

    };
  }
}
globalThis.customElements.define(PartyUI.tag, PartyUI);

