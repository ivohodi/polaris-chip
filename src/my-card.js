import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
  }

  static get styles() {
    return css`
      :host {
        display:inline-flex;
      }

      .box{
        display: flex;
        flex-wrap: wrap;
        height: 400px;
        align-content: space-between;
      }
      h1{
	      font-size:25px;
	      margin-top:8px;
	      text-align:center;
        }

      .card-wrapper{
        height:300px;
        max-width:180px;
		    margin:15px;
		    background:#e5e5e5;
		    border:1px solid #0d174e;
		    text-align:center;
      }
      .card-img{
            max-width:180px;
            max-height:180px;
				    border-bottom:4px solid #0d174e;
      }
      .btn{
        background-color:#0d174e;
        color:white;
      }
      
    `;
  }

  render() {
    return html`
    <div class="box">
    <div class="card-wrapper">
      <img class="card-img" src="${this.image}">
      <h1>${this.title}</h1>
      <p>${this.description}</p>
      <div class="btn-wrapper">
        <a href="${this.link}">
          <button class="btn">Learn More</button>
        </a>
      </div>
  </div>
  </div>
      `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: {type: String},
      image: {type: String},
      description:{type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
