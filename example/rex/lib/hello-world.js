const template = document.createElement("template");
template.innerHTML = 
`<div class="">
  hello world, from rex!
  <br><br>
  <button onClick="$$.changeRoute('/anotherPage', '#app');">another user defined page</button></div>
`;

class HelloWorld extends HTMLElement {
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

  export { HelloWorld };