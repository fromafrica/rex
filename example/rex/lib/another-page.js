const template = document.createElement("template");
template.innerHTML = 
`<div class="">
  another page from rex!
  <br><br>
  <button onClick="$$.changeRoute('/helloWorld', '#app');">go back home</button></div>
`;

class AnotherPage extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.render();
    }
  
    disconnectedCallback() {
      this.removeEventListener('click', $$.changeRoute);
    }
  
    render() {
        this.appendChild(template.content.cloneNode(true));
        const button = document.querySelector("button");
        button.addEventListener('click', () => {  }, false);
    }
  }

  export { AnotherPage };