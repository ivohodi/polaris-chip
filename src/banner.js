import { LitElement, html, css } from 'lit';

export class BannerApp extends LitElement {
  static get tag() {
    return 'banner-app';
  }
  constructor() {
    super();
    this.infotxt="this is info txt. Oh no something really bad has happened! KEEP A LOOK OUT";
    this.status="emergency";
    this.open=true;
  }
  static get styles() {
    return css`
      :host {
        --display-mode: true;
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
        background-color: var(--secondary-color);
        top:0px;
        position: sticky;
        z-index: 100;
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;



      }

      .btn-area{
        height: 100%;
        width: 15%;
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
        display: flex;
        flex-wrap: wrap;
  
        padding: 16px;
      }
      .message-text{
        transform: skew(-20deg);
        padding-left: 16px;
      }

      .content{
        height: 100%;
        width: 70%;
        transform:skew(20deg);
        background-color: var(--main-color);
      }




    `;
  }
  openedView(){
    return html`
      <div class="banner-wrapper">
        <div>
          <p class="date">12th Feburary 2024</p>
        </div>
        <div class="content">
            <svg class="message-text" style="height: 50px; width 50px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alert-circle-outline</title><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>
            <p class="message-text">This is quite possibly the best text that has ever been writtten in the history of ever</p>
        </div>
        <div class="btn-area">
          <button class="close">&times Close</button>
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

