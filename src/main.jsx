import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import Body from "./layout/body/Body";
import Blog from "./layout/blog/Blog";
import Auth from "./layout/auth/Auth";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AllToys from "./layout/allToys/AllToys";
import AuthProvider from "./provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./privateRoute/PrivateRoute";
import "react-tooltip/dist/react-tooltip.css";
import ErrPage from "./components/errPage/ErrPage";
import MyToys from "./layout/myToys/MyToys";
import AddToy from "./layout/addToy/AddToy";
import Details from "./layout/details/Details";
import UpdateToy from "./layout/updateToy/UpdateToy";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Auth></Auth>,
		children: [
			{
				path: "/",
				element: <Navigate to={"/home"}></Navigate>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
		],
	},
	{
		path: "/home",
		element: <Body></Body>,
	},
	{
		path: "/blog",
		element: <Blog></Blog>,
	},
	{
		path: "/all-toy",
		element: <AllToys></AllToys>,
	},
	{
		path: "/my-toy",
		element: (
			<PrivateRoute>
				<MyToys></MyToys>
			</PrivateRoute>
		),
	},
	{
		path: "/add-toy",
		element: (
			<PrivateRoute>
				<AddToy></AddToy>
			</PrivateRoute>
		),
	},
	{
		path: "/update/:ID",
		element: (
			<PrivateRoute>
				<UpdateToy></UpdateToy>
			</PrivateRoute>
		),
		loader: ({ params }) => fetch(`http://localhost:5000/all-toys/${params.ID}`),
	},
	{
		path: "/details/:ID",
		element: (
			<PrivateRoute>
				<Details></Details>
			</PrivateRoute>
		),
		loader: ({ params }) =>
			fetch(`http://localhost:5000/all-toys/${params.ID}`),
	},
	{
		path: "*",
		element: <ErrPage></ErrPage>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
			<ToastContainer />
		</AuthProvider>
	</React.StrictMode>
);
