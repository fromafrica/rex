const homeTemplate = document.createElement("template");
homeTemplate.innerHTML = `<div class="">rex home<br><br>
<button onClick="$$.changeRoute('/help', '#app');">Click me</button></div>`;

class RexHome extends HTMLElement {
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
        this.appendChild(homeTemplate.content.cloneNode(true));
        const button = document.querySelector("button");
        button.addEventListener('click', () => {  }, false);
    }
}

const helpTemplate = document.createElement("template");
helpTemplate.innerHTML = `<div class="">rex help<br><br>
<button onClick="$$.changeRoute('/home', '#app');">Click me</button></div>`;

class RexHelp extends HTMLElement {
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
        this.appendChild(helpTemplate.content.cloneNode(true));
        const button = document.querySelector("button");
        button.addEventListener('click', () => {  }, false);
    }
}

const errorTemplate = document.createElement("template");
errorTemplate.innerHTML = `<div class="">404! sorry! route not found!</div>`;

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