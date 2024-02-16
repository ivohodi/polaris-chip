import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {
  static get tag() {
    return 'counter-app';
  }
  constructor() {
    super();
    this.count=0;
    this.min=-5;
    this.max=25;  

  }
  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }

      .counter-wrapper{
        font-size: 24px;
        padding:16px 24px;
        margin:16px;
      }

      button:hover{
        background-color:#87CEEB	;
        border: 1px solid black;
      }
      .addbtn:focus {
        background-color:#2E8B57		;
        border: 1px solid black;
      }
      .minusbtn:focus {
        background-color:#a72802		;
        border: 1px solid black;
      }
      .countnumber{
        font-size:40px;
        text-align:center;
        padding:16px;
        margin:8px;
        align-self:center;
      }
      button{
        padding:16px;
        margin:8px 24px;
        align-self:center;
      }
      :host([count="18"]) .countnumber{
        color:#40B5AD;
      }
      :host([count="21"]) .countnumber{
        color:#87CEEB;
      }
      :host([maxReached]){
        color:#A42A04; 
      }
      :host([minReached]){
        color:#A42A04;
      }
    `;
  }

  render() {
    return html`
    <confetti-container id="confetti">
    <div class="counter-wrapper">
    <h1 style="color:black;">Counter</h1>
    <div class="countnumber">${this.count}</div>
    <button class="addbtn" @click="${this.increaseCount}" ?disabled="${this.max === this.count}">+</button>
    <button class="minusbtn" @click="${this.decreaseCount}" ?disabled="${this.min === this.count}" >-</button>
    </div>
    </confetti-container>
    `;
  }
 
  static get properties() {
    return {
      title: { type: String },
      link: {type: String}, 
      count:{type: Number,reflect:true},
      min: {type: Number,reflect:true},
      max: {type: Number,reflect:true},
      maxReached:{type: Boolean,reflect: true},
      minReached:{type: Boolean,reflect: true},
    };
  }
  increaseCount(){
        this.count+=1;
    };

  decreaseCount(){
      this.count-=1;
      
    };

updated(changedProperties) {
  if(this.max === this.count){
    console.log("MAXREACHED")
    this.maxReached=true;
  }
  else{
    this.maxReached=false;
  }

  if(this.min === this.count){
    this.minReached=true;
  }
  else{
    this.minReached=false;
  }

  if (this.count==21) {
    // do your testing of the value and make it rain by calling makeItRain
    this.makeItRain();
  }
}

makeItRain() {
  // this is called a dynamic import. It means it won't import the code for confetti until this method is called
  // the .then() syntax after is because dynamic imports return a Promise object. Meaning the then() code
  // will only run AFTER the code is imported and available to us
  import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
    (module) => {
      // This is a minor timing 'hack'. We know the code library above will import prior to this running
      // The "set timeout 0" means "wait 1 microtask and run it on the next cycle.
      // this "hack" ensures the element has had time to process in the DOM so that when we set popped
      // it's listening for changes so it can react
      setTimeout(() => {
        // forcibly set the poppped attribute on something with id confetti
        // while I've said in general NOT to do this, the confetti container element will reset this
        // after the animation runs so it's a simple way to generate the effect over and over again
        this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
      }, 0);
    }
  );
}
  }

  

globalThis.customElements.define(CounterApp.tag, CounterApp);

