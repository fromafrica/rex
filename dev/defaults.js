const homeTemplate = document.createElement("template");
homeTemplate.innerHTML = `<div class="">rex home</div>`;

class RexHome extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.render();
    }
  
    disconnectedCallback() {
    }
  
    render() {
        this.appendChild(homeTemplate.content.cloneNode(true));
    }
}

const helpTemplate = document.createElement("template");
helpTemplate.innerHTML = `<div class="">rex help</div>`;

class RexHelp extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.render();
    }
  
    disconnectedCallback() {
    }
  
    render() {
        this.appendChild(helpTemplate.content.cloneNode(true));
    }
}

const errorTemplate = document.createElement("template");
errorTemplate.innerHTML = `<div class="">rex help</div>`;

class RexError extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.render();
    }
  
    disconnectedCallback() {
    }
  
    render() {
        this.appendChild(errorTemplate.content.cloneNode(true));
    }
}

export { 
    RexHome,
    RexHelp,
    RexError
};