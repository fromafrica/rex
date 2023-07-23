const template = document.createElement("template");
template.innerHTML = `<div class="">404 not found</div>`;

class ErrorPage extends HTMLElement {
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

  export { ErrorPage };