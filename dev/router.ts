function getPath () {
	const path = window.location.pathname.split('/');
	path.shift();
	return path;
}

function checkPath (routes: Array<string>, path: Array<string>): boolean {
	if (path[0] === "") { return true; } // to cover the home page
	
	return routes.includes(path[0]); // check all other routes
}

function renderComponent (component: string) {
	const router = window.appState.getRouter();
    console.log(router);
    console.log('requested page:'+ component);
    return '<hello-world></hello-world>';
}

export { getPath, checkPath, renderComponent };