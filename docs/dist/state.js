// configure the mutable runtime state
const appRuntime = {
	menuOpen: false,
	router: {},
};

// collection of setters/getters/toggles for app state
var $$ = {
	// siteName
	getSiteName: () => appConfig.siteName,

	// menuOpen
	toggleMenuOpen: () => appRuntime.menuOpen === false ? appRuntime.menuOpen = true : appRuntime.menuOpen = false,
	getMenuOpen: () => appRuntime.menuOpen,

	// router
	setRouter: (router) => appRuntime.router = router,
	getRouter: () => appRuntime.router,
}

export { $$ };