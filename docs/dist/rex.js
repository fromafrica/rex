// global app state
const { $$ } = await import('./state.js');
window.$$ = $$;

const { 
	getPath, 
	checkPath, 
	renderComponent, 
	changeRoute,
	historyEntry
} = await import('./router.js');

$$.changeRoute = changeRoute;
$$.getPath = getPath;
$$.checkPath = checkPath;
$$.renderComponent = renderComponent;
$$.historyEntry = historyEntry;

// routing for browser events (back/forward)
window.onpopstate = function(e) {

	console.log(e);

	// verify not landing page
	if (e.state != null) {
		var pathArray = e.state.url.split('/');
		var pathOldArray = e.state.prev.split('/');

		console.log(pathArray);
		console.log(pathOldArray);

		if (pathArray[1] == "") { pathArray[1] = "news"; }
		if (pathArray[2] == "") { pathArray[2] = "home"; }

		// check to see if section changed
		// if (pathArray[1] == pathOldArray[1])
		// {
		// 	setCurrentPage('/'+ pathArray[1] +'/'+ pathArray[2], "#content");
		// } else { // section different, also load menu
		// 	setCurrentPage('/'+ pathArray[1] +'/'+ pathArray[2], "#content");
		// }
	} else {
		$$.changeRoute('/home', "#app");
	}
};

// modules require an export, even if it's empty
export { };