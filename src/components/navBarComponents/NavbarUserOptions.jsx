import { useSelector, useDispatch } from "react-redux";
import { selectUser, setUser } from "../../features/userFeature";
import { Link } from "react-router-dom";

const NavbarUserOptions = () => {
	const dispatch = useDispatch();
	const signOff = () => {
		window.localStorage.clear();
		dispatch(setUser(false));
	};

	const userSigned = useSelector(selectUser);

	let optionSignOff = (
		<button className="btn btn-danger" onClick={signOff}>
			Cerrar Sesion
		</button>
	);

	let optionSignIn = (
		<>
			<Link className="btn btn-primary mb-2" to="/signIn">
				Iniciar Sesion
			</Link>
			<Link className="btn btn-success" to="/signUp">
				Registrarse
			</Link>
		</>
	);

	let optionSelected;

	if (userSigned.email) {
		optionSelected = optionSignOff;
	} else {
		optionSelected = optionSignIn;
	}

	return (
		<>
			<div className="d-flex flex-column">{optionSelected}</div>
		</>
	);
};

export default NavbarUserOptions;
