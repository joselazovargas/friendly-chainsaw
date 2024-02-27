import "./App.css";
import CreateEvent from "./pages/CreateEvent";
import { app } from "../config";

function App() {
	console.log(app);
	return (
		<>
			<CreateEvent></CreateEvent>
		</>
	);
}

export default App;
