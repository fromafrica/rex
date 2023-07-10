// global app state
const { appState } = await import('./state.js');
window.appState = appState;

//import * as helper from './rex/helper.ts'

// routing
const { getPath, checkPath, renderComponent } = await import('./router.js');

// get
const path = getPath();

// define
window.appState.setRouter({
	home: '<rex-home></rex-home>',
	help: '<rex-help></rex-help>',
});

// validate + display
const router = window.appState.getRouter();
if (checkPath(Object.keys(router), path)) {
	document.querySelector("#app").innerHTML = renderComponent(router[path[0]]);
} else {
	document.querySelector("#app").innerHTML = "<error-page></error-page>";
}

// modules require an export, even if it's empty
export {};