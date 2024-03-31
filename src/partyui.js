import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";

export class PartyUI extends DDD{
  
  static get tag() {
    return 'party-ui';
  }
  constructor() {
    super();
    this.playersarray=["You"];
    this.index=0;
    this.totalplayers=1;
  }
  static get styles() {
    return [
      super.styles,
      css`
      :host{
      display:flex;
      justify-content:center;
      }
      .partyui-wrapper{
        color:var(--ddd-theme-default-slateMaxLight);
        background-color:var(--ddd-theme-default-beaverBlue);
        font-family: "Press Start 2P", system-ui, sans-serif;
        padding:var(--ddd-spacing-8);
        margin: var(--ddd-spacing-5);

      }
      .partyui{
        color:var(--ddd-theme-default-slateMaxLight);
        background-color:var(--ddd-theme-default-beaverBlue);
        font-family: "Press Start 2P", system-ui, sans-serif;


        height:800px;
        width:950px;
        
        padding:var(--ddd-spacing-8);
        margin: var(--ddd-spacing-5);

        display:flex;
        align-items: center; 
        //flex-direction: row;
             
      }
      .characters{
        justify-content: center; 
        text-align:center;
        

        //display:flex;
      }
      .charnames{
        font-family: "Press Start 2P", system-ui;
      }
      .scroll{
        overflow-x:auto;
        overflow-y:hidden;
      }

    `];
  }
  add(e){
    this.playersarray.push("");
    this.totalplayers++;
    this.requestUpdate(); 
    console.log(this.playersarray);
  }


  render() {
    const visPlayers = this.playersarray;
    return html`
    <div class="partyui-wrapper">
      <h1>PARTY-UI</h1>
      <div class="partyui">
  
      ${visPlayers.map((player, index) => html`
      <div class="scroll">
        <div class="character-wrapper">
        <div class="character" >
          <rpg-character seed="${player}"></rpg-character>
        </div>
        <input type="text" class="nametf" .value="${player || "ENTER"}"  @input="${(e) => this.updateName(e, index + this.index)}" @change="${(e) => this.saveName(e, index + this.index)}">
        </div>

        ${index + this.index > 0 ? html`
          <button class="savebtn" @click="${this.saveName}" > SAVE </button>
          <button @click="${() => this.remove(index + this.index)}" class="removebtn">> REMOVE</button>
                      ` : ''}
    </div>
      ` )}
        <div class="addbtn">
          <button @click="${this.add}">ADD User</button>
        </div>
  </div>


  </div>
  </div>
   
   `;
  }

  updateName(e, index) {
    const newName = e.target.value;
    this.playersarray[index] = newName;
    if (newName !== "") {
      this.requestUpdate();
    }
  }

  saveName(e,index){
   this.playersarray[index]=e.target.value;
   console.log(this.playersarray);
  }
  remove(index){
    if(this.playersarray.length>1){
      this.playersarray.splice(index,1);
      this.totalplayers--;
    }
  }

  static get properties() {
    return {
      playersarray:{type:Array},
      totalplayers:{type:Number, reflect:true},
      index:{type:Number, reflect:true},
    };
  }
}



globalThis.customElements.define(PartyUI.tag, PartyUI);

