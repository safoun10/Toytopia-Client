import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./layout/body/Body";
import Blog from "./layout/blog/Blog";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Body></Body>
	},
	{
		path: "/blog",
		element: <Blog></Blog>
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);