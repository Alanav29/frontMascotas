import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userFeature";
import NavbarUserOptions from "./NavbarUserOptions";
import "../../styles/Navbar.css";

const Navbar = () => {
	const userState = useSelector(selectUser);
	let userMenuText = "Usuarios";

	if (userState.token) {
		userMenuText = userState.name;
	} else {
		userMenuText = "Usuarios";
	}

	return (
		<nav className="navbar navbar-expand-md bg-body-tertiary">
			<div className="container-fluid d-flex justify-content-start">
				<Link to="/" className="navbar-brand">
					App Mascotas
				</Link>
				<button
					className="navbar-toggler ms-auto"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNav"
				>
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link
								className="nav-link"
								aria-current="page"
								to="/mascotas-perdidas"
							>
								Mascotas Perdidas
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/mascotas-resguardadas">
								Mascotas Resguardadas
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/mascotas-en-adopcion">
								Mascotas en Adopción
							</Link>
						</li>
					</ul>
				</div>
				<div className="navbar-nav mb-lg-0 ">
					<li className="nav-item dropdown">
						<div
							className="d-flex align-items-center userOptionsDiv"
							role="button"
							data-bs-toggle="dropdown"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								className="bi bi-person-circle me-1"
								viewBox="0 0 16 16"
							>
								<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
								<path
									fillRule="evenodd"
									d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
								/>
							</svg>
							{userMenuText}
						</div>
						<ul className="dropdown-menu">
							<li>
								<div className="dropdown-item" href="#">
									<NavbarUserOptions />
								</div>
							</li>
						</ul>
					</li>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
