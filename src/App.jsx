import { BrowserRouter as Router } from "react-router-dom";
import { RouterIndex } from "./routes/RouterIndex";
import Navbar from "./components/navbarComponents/Navbar";
import "./styles/app.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./features/userFeature";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		let user = JSON.parse(window.localStorage.getItem("user"));

		if (user) {
			dispatch(setUser(user));
		}
	}, []);
	return (
		<>
			<Router>
				<Navbar />
				<RouterIndex />
			</Router>
		</>
	);
};

export default App;
