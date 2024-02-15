import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {
  static get tag() {
    return 'counter-app';
  }
  constructor() {
    super();
    this.count=0;
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

      button:hover{
        background-color:#4169E1	;
        border: 1px solid black;
      }
      button:focus{
        background-color:#0F52BA	;
        border: 1px solid black;
      }
      .countnumber{
        font-size:40px;
        text-align:center;
        padding:8px;
        align-self:center;
      }
      button{
        text-align:center;
        padding:8px;
        margin:16px;
        align-self:center;
      }
      :host([count="18"]) .countnumber{
        color:#40B5AD;
      }
      :host([count="21"]) .countnumber{
        color:#87CEEB;
      }
    `;
  }

  render() {
    return html`
    <div class="counter-wrapper">
    <h1>Counter</h1>
    <div class="countnumber">${this.count}</div>
    <button class="addbtn" @click="${this.increaseCount}">+</button>
    <button class="minusbtn" @click="${this.decreaseCount}">-</button>
    </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: {type: String}, 
      count:{type: Number,reflect:true},
    };
  }
  increaseCount(){
      this.count+=1;
    };

  decreaseCount(){
      this.count-=1;
    };
  }

  

globalThis.customElements.define(CounterApp.tag, CounterApp);

