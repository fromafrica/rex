function getPath () {
	const path = window.location.pathname.split('/');
	path.shift();
	return path;
}

function checkPath (routes, path) {
	if (path[0] === "") { return true; } // to cover the home page
	
	return routes.includes(path[0]); // check all other routes
}

function historyEntry (targetUrl) {
	window.history.pushState({url: "" + targetUrl + "", prev: ""+ window.location.pathname +""}, null, targetUrl);
}

function changeRoute (path, target) {
	const router = $$.getRouter();
	if (path === "" || path === "/" || path === "/home")
	{
		$$.historyEntry('/home');
		document.querySelector(target).innerHTML = "<x-home></x-home>";
	} else {
		if (Object.keys(router).includes(path))
		{
			$$.historyEntry(path);
			document.querySelector(target).innerHTML = router[path];
		} else {
			$$.historyEntry('/error');
			document.querySelector(target).innerHTML = "<x-error></x-error>";
		}
		
	}
}

export { 
	getPath, 
	checkPath, 
	changeRoute,
	historyEntry
};