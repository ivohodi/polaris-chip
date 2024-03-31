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
    this.message="LETS GOO";
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
        padding:var(--ddd-spacing-4);
        margin: var(--ddd-spacing-5);

      }
      .partyui{
        color:var(--ddd-theme-default-slateMaxLight);
        background-color:var(--ddd-theme-default-beaverBlue);
        font-family: "Press Start 2P", system-ui, sans-serif;


        height:800px;
        width:950px;
        
        padding:var(--ddd-spacing-4);
        margin: var(--ddd-spacing-8);

        display:flex;
        //align-items: center; 
        //flex-direction: row;
             
      }
      .charnames{
        font-family: "Press Start 2P", system-ui;
      }
      .scroll{
        overflow-x:auto;
        overflow-y:hidden;
      }
      .addbtn,.savebtn,.removebtn,.saveparty{
        border: var(--ddd-spacing-1) dashed white;
        padding: var(--ddd-spacing-2);
        margin: var(--ddd-spacing-2);

        text-align: center;
        color: white;
        font-family: "Press Start 2P", system-ui;
        background-color: transparent;
      }
      .input-name{
        background: transparent;
        color: white;
        font-family: "Press Start 2P", system-ui;
        border: transparent;
        width:250px;
        font-size: 25px;
        margin-top: var(--ddd-spacing-2);

      }
      
    .titletext{
      font-size:48px;
      text-align:center;
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
    <confetti-container id="confetti">
    <div class="partyui-wrapper">
      <div class="titletext" > PARTY-UI</div>
      <p> < ${this.message} > </p>
      <div class="partyui">
      ${visPlayers.map((player, index) => html`
      <div class="scroll">
        <div class="character-wrapper">
        <div class="character" >
          <rpg-character seed="${player}"></rpg-character>
        </div>
        <input type="text" class="input-name" .value="${player || "ENTER"}"  @input="${(e) => this.updateName(e, index + this.index)}" @change="${(e) => this.saveName(e, index + this.index)}">
        </div>

        ${index + this.index > 0 ? html`
          <button class="savebtn" @click="${this.saveName}" > SAVE </button>
          <button @click="${() => this.remove(index + this.index)}" class="removebtn">> REMOVE</button>
                      ` : ''}
    </div>
      ` )}
        <div>
          <button class="addbtn" @click="${this.add}">ADD User</button>
        </div>
        <div>
        <button class="saveparty" @click="${this.saveparty}">Save Party</button>
        </div>
  </div>


  </div>
  </div>
   </confetti-container>
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
    const newName=e.target.value;
    if(/^[a-z0-9]{1,10}$/.test(newName)){
      console.log(this.playersarray);
      this.playersarray[index]=newName;
      this.message="WELCOME to the party "+newName;
    }
    else{
      this.message="ERROR! Names can only contain lowercase and numbers";
    }
    this.requestUpdate();
  }
  remove(index){
    if(this.playersarray.length>1){
      this.message="Bye bye "+this.playersarray[index];
      this.playersarray.splice(index,1);
      this.totalplayers--;
      
    }
  }

  makeItRain() {
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {
        setTimeout(() => {
          this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      }
    );
  }
  saveparty(){
    this.makeItRain();
    this.message="PARTY of "+this.playersarray+" SAVED!";
    console.log(this.playersarray);
    this.requestUpdate();

  }

  static get properties() {
    return {
      playersarray:{type:Array},
      totalplayers:{type:Number, reflect:true},
      index:{type:Number, reflect:true},
      message:{type:String,reflect:true},
    };
  }
  



}



globalThis.customElements.define(PartyUI.tag, PartyUI);

