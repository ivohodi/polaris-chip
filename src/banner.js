import { LitElement, html, css } from 'lit';

export class BannerApp extends LitElement {
  static get tag() {
    return 'banner-app';
  }
  constructor() {
    super();
    this.date="MARCH 7, 2024 12:00AM";
    this.infotxt="this is info txt. Oh no something really bad has happened! KEEP A LOOK OUT";
    this.status="emergency";
    this.title="TEST CAMPUS ALERT";
    this.open=true;
    this.sticky=false;

    if(localStorage.getItem("campus-alert-opened-state") === 'false'){
      this.open = false;
    }

  }
  static get styles() {
    return css`
      :host {
        --display-mode: true;
      }
      :host([status="emergency"]){
        --main-color:#ab0909;
        --secondary-color:#da313a;
        --text-color:white;
      }
      :host([status="warning"]){
        --main-color:#BF8225;
        --secondary-color:#FFD100;
        --text-color:white;
      }
      :host([status="alert"]){
        --main-color:#173A71;
        --secondary-color:#CFECEB;
        --text-color:white;
      }
      .banner-wrapper{
        background-color: var(--main-color);
        top:0px;
        position: sticky;
        z-index: 100;
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .banner-wrapper-closed{
        background-color: var(--secondary-color);
        top:0px;
        /* position: sticky; */
        z-index: 100;
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      :host([sticky]) .banner-wrapper-closed{
        position:sticky;
      }
      .btn-area{
        height: 100%;
        width: 15%;
      }
      svg{
        margin:6px;
      }
      .closebtn{
        display:var(--display-mode);
        font-size:20px;
        font-weight:600;
        font-family: Menlo,Consolas,Monaco,monospace;
        padding:16px;
        background-color:transparent;
        border:0px;
        color:black;
        cursor:pointer;
        color:var(--text-color);

      }
  
      .openbtn{
        background-color:transparent;
        border:0px;
        display:var(--display-title);
        text-align:right;
      }
      .date{
        display: flex;
        flex-wrap: wrap;
        padding: 16px;

        font-family: Menlo,Consolas,Monaco,monospace;
        font-weight:999;
        color:var(--text-color);

      }
      .message-text{
        padding-top:2px;
        transform: skew(-20deg);
        padding-left: 16px;
      }

      .content{
        height: 100%;
        width: 70%;
        transform:skew(20deg);
        background-color: var(--secondary-color);
        font-family: Arial, Helvetica, sans-serif;
        font-weight:bold;

      }
      .clickablearea{
        cursor:pointer;
      }
    `;
  }
  toggleOpen(){
    this.open = !this.open;
    localStorage.setItem("campus-alert-opened-state", this.open);
    this.shadowRoot.querySelector('.closebtn').focus();
  }
  openedView(){
    return html`
      <div class="banner-wrapper">
        <div>
          <slot class="date">${this.date}</slot>
        </div>
        <div class="content">
            <svg class="message-text" style="height: 50px; width 50px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alert-circle-outline</title><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>
            <p class="message-text">
              <slot>${this.infotxt}</slot>
            </p>
        </div>
        <div class="btn-area">
          <button class="closebtn" @click="${this.toggleOpen}">&times CLOSE</button>
       </div>
    </div>
    `;
  }

  closedView(){
    return html`
    <div class="banner-wrapper-closed">
        <svg style="height: 50px; width 50px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alert-circle-outline</title><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>
        <h1>${this.title}</h1>
      <div class="clickablearea">
        <div class="closebtn" @click="${this.toggleOpen}">
          <svg xmlns="http://www.w3.org/2000/svg" style="height:25px; width:25px;" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>  
       </div>
      </div>
    </div>


    `;
  }
  render() {
    return (this.open) ? this.openedView() : this.closedView();
  }

  static get properties() {
    return {
      open: {type:Boolean, reflect: true},
      status: {type:String,reflect:true },
      date:{type:String},
      infotxt:{type:String},
      title:{type:String},
      sticky:{type:Boolean,reflect:true},
    };
  }
  }

  globalThis.customElements.define(BannerApp.tag, BannerApp);

