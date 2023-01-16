const isValidRouterObject = (router) => {
	return router && router.routes && router.routes.length > 0;
};

const isValidRoute = (route) => {
	if (
		route.path === undefined ||
		route.path === null ||
		route.path.length === 0
	)
		return false;
	return true;
};

export { isValidRouterObject, isValidRoute };
