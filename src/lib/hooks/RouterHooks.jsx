import { useContext } from "react";
import { RouterContext } from "../RouterProvider";
import { isValidRoute } from "../utils/Checks";

const createRouter = (routesObject) => {
	// Store valid routes
	const routes = [];

	if (!routesObject) {
		// TODO: Add error handling
		throw new Error("No routes object provided");
	}

	// Loop through the routes object
	for (let i in routesObject) {
		const route = routesObject[i];
		// Check if the route is valid
		if (isValidRoute(route)) {
			// Add the route to the routes array
			routes.push(route);
		}
	}

	return routes;
};

const useParameter = () => {
	const { route } = useContext(RouterContext);
	return route.parameter;
};

const useRouter = () => useContext(RouterContext);

export { createRouter, useRouter, useParameter };
