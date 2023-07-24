// global app state
const { $$ } = await import('https://static.rex.rs/dist/rex.js'); // staging
//const { $$ } = await import('http://localhost:3000/rex.js'); // local

// import components
const { HelloWorld } = await import('./lib/hello-world.js');
const { AnotherPage } = await import('./lib/another-page.js');

// define single page app router
$$.setRouter({
    "/helloWorld": "<hello-world></hello-world>",
    "/anotherPage": "<another-page></another-page>"
});

// broadcast component definitions
window.customElements.define("hello-world", HelloWorld);
window.customElements.define("another-page", AnotherPage);