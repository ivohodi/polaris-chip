import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";
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
    this.fancy=false;
  }

  static get styles() {
    return css`
      :host {
        display:inline-flex;
      }

      .box{
        display: flex;
        flex-wrap: wrap;
        height: 300px;
        align-content: space-between;
      }
      h1{
	      font-size:25px;
	      margin-top:8px;
	      text-align:center;
        overflow:auto;
        }

      .card-wrapper{
        height:300px;
        max-width:180px;
		    margin:16px;
		    background:#e5e5e5;
		    border:1px solid #0d174e;
		    text-align:center;
      }

      .card-image{
            width:150px;
				    border-bottom:4px solid #0d174e;
      }
      .btn{
        background-color:#0d174e;
        color:white;
      }
      :host([fancy]) {
        
        background-color: #ADD8E6;
        border: 2px solid navy;
        box-shadow: 10px 5px 5px #A7C7E7	;
      }
      details div{
        border:2px solid black;
        text-align: left;
        padding:8px;
        height: 70px;
        overflow:auto;
      }
      .change-color{
        background-color:#B6D0E2	;

      }

      details summary {
    text-align: center
    font-size: 20px;
    padding: 8px 0;
  }

  details[open] summary {
    font-weight: bold;
  }
  
      
    `;
  }
  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div class="box">
    <div class="card-wrapper">
    <meme-maker class="card-image" alt="" image-url="${this.image}" top-text="PSU" bottom-text="Building"></meme-maker>
      <!-- <img class="card-img" src="${this.image}"> -->
      <h1>${this.title}</h1>
      <!-- put this in your render method where you had details -->
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
        <slot>${this.description}</slot>
      </div>
</details>
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
      fancy:{type: Boolean,reflect: true},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

document.querySelector('.changetitle').addEventListener("click",function(e){
  const mycards=document.querySelectorAll('my-card');
  mycards.forEach(function(card){
    card.title="GO PSU";
  })
});

document.querySelector('.changeimage').addEventListener("click",function(e){
  const mycards=document.querySelectorAll('my-card');
  mycards.forEach(function(card){
    card.image="https://www.statecollege.com/wp-content/uploads/2021/03/1483631_46733.jpg";
  })
});

document.querySelector('.changebg').addEventListener("click",function(e){
  const mycards=document.querySelectorAll('my-card');
  mycards.forEach(function(card){
    card.shadowRoot.querySelector('.card-wrapper').classList.toggle('change-color');
    
  })
});

document.querySelector('.duplicate').addEventListener('click',function(event) {
  const cardList=document.querySelector('.card-wrapper');
  const myCardElements=cardList.querySelectorAll('my-card');
  if(myCardElements.length<10){
     const newCard = document.createElement('my-card');
     cardList.appendChild(newCard);
     const lastCard=myCardElements[myCardElements.length-1];
     newCard.title="Bellasario";
     newCard.image="https://www.bellisario.psu.edu/assets/uploads/carnegie-test.jpg";
     newCard.description="Majors: Advertising, Journalism, Film Production";
     newCard.link="https://www.bellisario.psu.edu/";
  }
});

document.querySelector('.delete').addEventListener('click',function(event) {
  const cardList=document.querySelector('.card-wrapper');
  const myCardElements=cardList.querySelectorAll('my-card');
  if(myCardElements.length>1){
    document.querySelector('my-card').remove();
  }
});
