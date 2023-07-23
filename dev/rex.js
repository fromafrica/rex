// global app state
const { appState } = await import('./state.js');
window.appState = appState;

//import * as helper from './rex/helper.ts'

// default components
const { RexHome, RexHelp, RexError } = await import('./defaults.js');

// component definitions
window.customElements.define("rex-home", RexHome);
window.customElements.define("rex-help", RexHelp);
window.customElements.define("rex-error", RexError);

// routing
const { getPath, checkPath, renderComponent } = await import('./router.js');

// get
const path = getPath();

// define
window.appState.setRouter({
	home: '<rex-home></rex-home>',
	help: '<rex-help></rex-help>',
	error: '<rex-error></rex-error>',
});

// validate + display
const router = window.appState.getRouter();
if (checkPath(Object.keys(router), path)) {
	document.querySelector("#app").innerHTML = renderComponent(router[path[0]]);
} else {
	document.querySelector("#app").innerHTML = "<rex-error></rex-error>";
}

// modules require an export, even if it's empty
export {};