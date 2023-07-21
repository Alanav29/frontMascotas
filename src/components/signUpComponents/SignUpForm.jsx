import { useForm } from "react-hook-form";
import postUser from "../../utils/user/postUserReq";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpForm = () => {
	const { handleSubmit, register } = useForm();
	const navigate = useNavigate();
	const notify = () => {
		toast.error("Ese usuario ya existe", {
			position: toast.POSITION.TOP_RIGHT,
		});
	};

	const signUp = (data) => {
		const fetchSignUp = async (data) => {
			try {
				const result = await postUser(data);

				if (result.status === 201) {
					console.log("se registro el usuario");
					navigate("/");
				}
			} catch (error) {
				notify();
				console.log("Ocurrio un error al registrar usuario ", error.message);
			}
		};
		fetchSignUp(data);
	};

	return (
		<>
			<form className="d-block" onSubmit={handleSubmit(signUp)}>
				<label className="form-label" htmlFor="signUpNameInput">
					First Name
				</label>
				<input
					{...register("name")}
					className="form-control"
					type="text"
					placeholder="Name"
					id="signUpNameInput"
					required
				/>

				<label className="form-label" htmlFor="signUpEmailInput">
					Email
				</label>
				<input
					{...register("email")}
					className="form-control"
					type="email"
					placeholder="Email address"
					id="signUpEmailInput"
					required
					pattern="[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?"
				/>

				<label className="form-label" htmlFor="signUpPasswordInput">
					Password
				</label>
				<input
					{...register("password")}
					className="form-control"
					type="password"
					placeholder="Password"
					id="signUpPasswordInput"
					required
				/>

				<button className="btn btn-success mt-3" type="submit">
					Registrarse
				</button>
			</form>
			<ToastContainer />
		</>
	);
};

export default SignUpForm;
