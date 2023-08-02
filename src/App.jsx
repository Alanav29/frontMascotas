import { BrowserRouter as Router } from "react-router-dom";
import { RouterIndex } from "./routes/RouterIndex";
import Navbar from "./components/navBarComponents/Navbar";
import "../src/styles/App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./features/userFeature";
import Footer from "./components/footerComponents/Footer";

const App = () => {
	const dispatch = useDispatch();
	const reloadUser = async () => {
		let user = await JSON.parse(window.localStorage.getItem("user"));

		if (user) {
			await dispatch(setUser(user));
		}
	};

	useEffect(() => {
		reloadUser();
	}, []);
	return (
		<>
			<Router>
				<Navbar />
				<RouterIndex />
				<Footer />
			</Router>
		</>
	);
};

export default App;
