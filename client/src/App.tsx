import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

const router = createBrowserRouter([
	{
		element: <Home />,
		path: "/",
	},
	{
		element: <Register />,
		path: "/register"
	},
	{
		element: <Login />,
		path: "/login"
	},
	{
		path: "*",
		element: <Navigate to="/" replace={true} />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
