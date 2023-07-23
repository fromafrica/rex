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
	if (component === undefined || component === null) { 
		return '<rex-home></rex-home>';
	} else {
    	return component;
	}
}

export { getPath, checkPath, renderComponent };