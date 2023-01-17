
![Logo](https://raw.githubusercontent.com/iotacb/rosy-router/master/rosylogo.svg)


# Rousy Router &middot; [![npm package][npm-badge]][npm] [![license][license]][license] [![size][size]][size]

[npm-badge]: https://img.shields.io/npm/v/rosy-router.svg?style=flat-square
[npm]: https://www.npmjs.org/package/rosy-router
[license]: https://img.shields.io/github/license/iotacb/rosy-router?style=flat-square
[size]: https://img.shields.io/bundlephobia/minzip/rosy-router

Rosy Router is a lightweight routing library for the React JavaScript library.


## Authors

- [@iotacb](https://www.github.com/iotacb)


## Features

- Dev friendly usage
- Paramter passing between routes
- Default navigation components


## Installation 

#### NPM
```
npm i rosy-router@latest
```

## Creating the router

Go to the entry point of your app, in this example it's the `index.jsx` file.
Make the changes to your file like the provided code.

```javascript
// Import the 'createRouter' function
import { createRouter } from "rosy-router";

// Create the router object
const router = createRouter([
    {
        path: "/", // URL location
        content: <h1>Hello router!</h1> // Content to draw
    },
    {
        path: "/rosy",
        content: <h1>I am using Rosy Router! :)</h1>
    }
]);
```

Now that the router object has been created, we have to pass it to the router.
Import the `RouterProvider` and use it as your entry element like this

```javascript
import React from "react";
import ReactDOM from "react-dom/client";

// Import the 'createRouter' function
import { createRouter, RouterProvider } from "rosy-router";

// Create the router object
const router = createRouter([
    {
        path: "/", // URL location
        content: <h1>Hello router!</h1> // Content to draw
    },
    {
        path: "/rosy",
        content: <h1>I am using Rosy Router! :)</h1>
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);
```

That's it, we now have a fully functional router component.

Click [here]() to see how to use the other features of Rosy.

