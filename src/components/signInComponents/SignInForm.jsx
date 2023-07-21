/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/userFeature";
import { useNavigate } from "react-router-dom";
import signIn from "../../utils/user/signInReq";

const SignInForm = () => {
	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const notify = () => {
		toast.error("Revisa tus datos", {
			position: toast.POSITION.TOP_RIGHT,
		});
	};

	const trySignIn = async (data) => {
		try {
			const result = await signIn(data.email, data.password);

			if (result.status === 200) {
				dispatch(
					setUser({
						_id: result.data._id,
						email: data.email,
						token: result.data.token,
						name: result.data.name,
					})
				);

				window.localStorage.setItem(
					"user",
					JSON.stringify({
						_id: result.data._id,
						email: data.email,
						token: result.data.token,
						name: result.data.name,
					})
				);

				navigate("/");
			}
		} catch (error) {
			notify();
			console.log("Ocurrio un error al iniciar sesion ", error.message);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(trySignIn)}>
				<div className="mb-3">
					<label htmlFor="signInEmailInput" className="form-label">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						id="signInEmailInput"
						{...register("email")}
						placeholder="name@example.com"
					/>
					<div id="emailHelp" className="form-text">
						No compartas tus datos con nadie
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="signInPasswordInput" className="form-label">
						Contraseña
					</label>
					<input
						type="password"
						className="form-control"
						id="signInPasswordInput"
						{...register("password")}
						placeholder="Password"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Iniciar sesion
				</button>
			</form>
			<ToastContainer />
		</>
	);
};

export default SignInForm;
