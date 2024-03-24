import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";

export class PartyUI extends DDD{
  
  static get tag() {
    return 'party-ui';
  }
  constructor() {
    super();
    this.playersarray=[];
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
    <div class="partyui">PARTY-UI</div>
    <rpg-character hat="random" seed="yourchar"></rpg-character>
   <div class="addbtn">
      <button>+</button>
      <p>ADD USER</p>
  </div>
   
   `;
  }

  static get properties() {
    return {
      playersarray:{type:Array},
    };
  }
}
globalThis.customElements.define(PartyUI.tag, PartyUI);

