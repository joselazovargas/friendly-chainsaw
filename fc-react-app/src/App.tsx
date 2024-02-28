import "./App.css";
import Signin from "./pages/Signin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Signup></Signup>,
	},
	{
		path: "/signin",
		element: <Signin></Signin>,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
