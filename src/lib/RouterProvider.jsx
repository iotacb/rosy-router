import React, { createContext, useEffect, useState } from "react";
import styled from "styled-components";
import { isValidRouterObject } from "./utils/Checks";
import { findMatchingRoute } from "./utils/Routing";
import ErrorPage from "./defaults/ErrorPage";

// Default context of the router
const defaultContext = {
	route: null,
};

// Create the context
const RouterContext = createContext(defaultContext);

function RouterProvider({ router }) {
	// The current route that will be rendered
	const [currentRoute, setCurrentRoute] = useState(null);
	const [currentParameter, setCurrentParameter] = useState(null);
	const [currentLocation, setCurrentLocation] = useState(
		window.location.pathname
	);

	const setLocation = (path, parameter) => {
		setCurrentLocation(path);
		if (parameter) setCurrentParameter(parameter);
	};

	useEffect(() => {
		if (isValidRouterObject(router)) {
			throw new Error("Please provide a valid router object");
		}
	}, [router]);

	useEffect(() => {
		// Update the url
		window.history.replaceState(null, null, currentLocation);
		const matchingRoute = findMatchingRoute(router);

		// If no matching route was found, render error page
		if (!matchingRoute) {
			console.error("No matching route found, rendering error page");
			setCurrentRoute({
				path: "",
				content: <ErrorPage />,
			});
			return;
		}

		// Update parameters of the route
		matchingRoute.parameter = {
			...matchingRoute.parameter,
			...currentParameter,
		};
		// Update the route
		setCurrentRoute(matchingRoute);
	}, [currentRoute, currentLocation]);

	return (
		<RouterContext.Provider
			value={{ ...defaultContext, route: currentRoute, setLocation }}
		>
			{currentRoute && currentRoute.content}
		</RouterContext.Provider>
	);
}

export { RouterContext, RouterProvider };
