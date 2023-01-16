import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Container from "./lib/defaults/components/Container";
import { createRouter } from "./lib/hooks/RouterHooks";
import { RouterProvider } from "./lib/RouterProvider";

import About from "./pages/About";
import Home from "./pages/Home";

const router = createRouter([
	{
		path: "/",
		content: <Home />,
		parameter: {},
	},
	{
		path: "/about",
		content: <About />,
		parameter: {
			title: "About",
		},
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
