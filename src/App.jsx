import { BrowserRouter as Router } from "react-router-dom";
import { RouterIndex } from "./routes/RouterIndex";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<Router>
			<Navbar />
			<RouterIndex />
		</Router>
	);
};

export default App;
