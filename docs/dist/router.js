function getPath () {
	const path = window.location.pathname.split('/');
	path.shift();
	return path;
}

function checkPath (routes, path) {
	if (path[0] === "") { return true; } // to cover the home page
	
	return routes.includes(path[0]); // check all other routes
}

function renderComponent (component) {
	const router = window.appState.getRouter();
    console.log('requested page:'+ component);
    return component;
}

export { getPath, checkPath, renderComponent };