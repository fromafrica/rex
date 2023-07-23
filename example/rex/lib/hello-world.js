const template = document.createElement("template");
template.innerHTML = `<div class="">hello rex</div>`;

class HelloWorld extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.render();
    }
  
    disconnectedCallback() {
    }
  
    render() {
        this.appendChild(template.content.cloneNode(true));
    }
  }

  export { HelloWorld };