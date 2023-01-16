const findMatchingRoute = (routes) => {
	// Get the current path
	const path = window.location.pathname;
	// Loop through the routes
	for (const route of routes) {
		// Check if the route matches the current path
		if (route.path === path) {
			// Return the route
			return route;
		}
	}

	// Return null if no match is found
	return null;
};

export { findMatchingRoute };
