import { LitElement, html, css } from 'lit';

export class BannerApp extends LitElement {
  static get tag() {
    return 'banner-app';
  }
  constructor() {
    super();

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
    `;
  }

  render() {
    return html`
    <div class="banner-wrapper">
      <div class="banner-content">
        <div class="banner-text">AHHHHHHHH </div>
      </div>
    </div>
    `;
  }
 
  static get properties() {
    return {

    };
  }

  }

  

  globalThis.customElements.define(BannerApp.tag, BannerApp);

