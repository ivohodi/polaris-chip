import { LitElement, html, css } from 'lit';

export class BannerApp extends LitElement {
  static get tag() {
    return 'banner-app';
  }
  constructor() {
    super();
    this.infotxt="this is info txt. Oh no something really bad has happened! KEEP A LOOK OUT";
    this.status="emergency";
  }
  static get styles() {
    return css`
        :host {
        --display-mode: true;
        display: inline;
      }
      :host([status="emergency"]){
        --main-color:#CE2029;
      }
      :host([status="warning"]){
        --main-color:#BF8225;
        
        --secondary-color:#FFD100;
      }
      :host([status="alert"]){
        --main-color:#3f5277;
      }
      .banner-wrapper{
        background-color:var(--secondary-color);
        top:0px;
        position: sticky;

      }
      .banner-content{
        margin:0 auto;
        height:100%;
        /* max-width:500px; */
        display:flex;       

      }
      .banner-text{
        color:white;
      }
      .alert-icon{
        height: 60px;
      }
      .closebtn{
        display:var(--display-mode);
        font-size:20px;
        font-weight:400;
        background-color:transparent;
        border:0px;
        color:black;
        position:absolute;
        top:8px;
        right:10px;
      }
      .closebtn:hover{
        opacity:1;
      }
      .message-wrapper{
        display: var(--display-mode);
        transform:skew(20deg);
        background-color:var(--main-color);
      }

      .messagewrapper.hide{
        display: none;
      }
      .openbtn{
        background-color:transparent;
        border:0px;
        display:var(--display-title);
        text-align:right;
      }
      .banner-title{
        display:var(--display-title);
      }
      .date{
        text-align:left;
  
      }
      .message-text{
        transform: skew(-20deg);
        padding-left: 20px;
        width: 80%;
      }

    `;
  }

  render() {
    return html`
    <div class="banner-wrapper">
      <div class="banner-content">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="alert-icon">
        <g transform="translate(-350.099 -428.714)"><g transform="translate(350.099 428.714)" fill="none" stroke-width="6">
          <circle cx="50%" cy="50%" r=30 fill="#F10529"></circle>
          </g><g transform="translate(395 455)"><rect width="10" height="7" transform="translate(0.919 34.336)">
          </rect><path d="M6520.672,2327.554h-5.854l-3.21-23.669V2299.2h11.81v4.681Z" transform="translate(-6511.607 -2299.203)">
          </path></g></g></svg>
        <div class="banner-title">
          <h1 class="title">TEST ALERT</h1>
        </div>
          <div class="message-wrapper">
            <div class="message-text">
              <slot></slot>
              <p class="date">12th Feburary 2024</p>
            </div>
        </div>
        <button class="openbtn" @click="${this.openbtn}">⌄</button>

      <div class="btn-wrapper">
          <button class="closebtn" @click="${this.closebtn}">&times Close</button>
      </div>
    </div>
    `;
  }
 
  static get properties() {
    return {
      open: {type:Boolean, reflect: true},
      status: {type:String,reflect:true },
    };
  }
//    this.open=!this.open;
  closebtn(){
    this.open=false;
    console.log("Close")
    this.style.setProperty('--display-mode','none');
    this.style.setProperty('--display-title','true');
    this.style.setProperty('--display-closebutton','none');
  }

  openbtn(){
    this.open=true;
    console.log("open")
    this.style.setProperty('--display-mode','true');
    this.style.setProperty('--display-title','none');
    this.style.setProperty('--display-closebutton','true');
  }
  }

  globalThis.customElements.define(BannerApp.tag, BannerApp);

