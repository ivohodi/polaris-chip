import { LitElement, html, css } from 'lit';

export class BannerApp extends LitElement {
  static get tag() {
    return 'banner-app';
  }
  constructor() {
    super();
    this.infotxt="this is info txt";

  }
  static get styles() {
    return css`
        :host {
        display: inline;
      }
      .banner-wrapper{
        background-color:blue;
      }
      .banner-content{
        padding:16px;
        margin:0 auto;
        height:100%;
        max-width:500px;
        display:flex;
        align-items:center;

      }
      .banner-text{
        color:white;
      }
      .alert-icon{
        height: 60px;
      }
      .closebtn{
        font-size:20px;
        font-weight:400;
        background-color:white;
        color:black;
        position:absolute;
        top:8px;
        right:10px;
      }
      .closebtn:hover{
        opacity:1;
      }
      #infotxt{
        display:block;
        color:pink;
      }
    `;
  }

  render() {
    return html`
    <div class="banner-wrapper">
      <div class="banner-content">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="alert-icon">
        <g transform="translate(-350.099 -428.714)"><g transform="translate(350.099 428.714)" fill="none" stroke-width="6">
          <circle cx="50%" cy="50%" r=30 fill="red"></circle>
          </g><g transform="translate(395 455)"><rect width="10" height="7" transform="translate(0.919 34.336)">
          </rect><path d="M6520.672,2327.554h-5.854l-3.21-23.669V2299.2h11.81v4.681Z" transform="translate(-6511.607 -2299.203)">
          </path></g></g></svg>
        
        <div class="banner-txt">
        <h1 class="title">TEST ALERT</h1>
        <div id="infotxt">${this.infotxt}</div>
        </div>
      </div>
      <div class="btn-wrapper">
      <button class="closebtn" @click="${this.closebtn}">&times</button>
      </div>
    </div>
    `;
  }
 
  static get properties() {
    return {

    };
  }

  closebtn(){
    var selector=document.getElementById('infotxt');
    console.log(selector);
    if (selector==="none"){
      selector.style.display="block";
    }
    else{
      selector.style.display="none";
    }
  }
  }

  globalThis.customElements.define(BannerApp.tag, BannerApp);

