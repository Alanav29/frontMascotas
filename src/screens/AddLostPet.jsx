import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/userFeature";
import postLostPet from "../utils/lostPets/postLostPet";
import { useNavigate } from "react-router-dom";
import { setChange } from "../features/changesCounterFeature";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddLostPet = () => {
	const { register, handleSubmit } = useForm();
	const user = useSelector(selectUser);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const notify = () => {
		toast.success("Estamos agregando a tu mascota", {
			position: toast.POSITION.TOP_CENTER,
		});
	};

	const fetchPostLostPet = async (data) => {
		try {
			const result = await postLostPet(data, user._id, user.token);

			if (result.status === 201) {
				navigate("/");
				dispatch(setChange(1));
				console.log("se agrego la mascota");
			}
		} catch (error) {
			console.log("Ocurrio un error al agregar la mascota ", error.message);
		}
	};

	const addLostPet = (data) => {
		notify();
		fetchPostLostPet(data);
	};

	return (
		<div className="container my-4 d-flex flex-column justify-content-center">
			<h1 className="mb-3">Agregar mascota perdida</h1>
			<form className="d-block" onSubmit={handleSubmit(addLostPet)}>
				<label className="form-label" htmlFor="lostPetImgInput">
					Foto de mascota
				</label>
				<input
					{...register("image")}
					type="file"
					className="form-control mb-3"
					id="lostPetImgInput"
				/>

				<label className="form-label" htmlFor="lostPetNameInput">
					Nombre de mascota
				</label>
				<input
					{...register("name")}
					className="form-control mb-3"
					type="text"
					placeholder="Name"
					id="lostPetNameInput"
					required
				/>

				<label className="form-label" htmlFor="lostPetDescInput">
					Descripción
				</label>
				<textarea
					{...register("description")}
					className="form-control mb-3"
					aria-label="With textarea"
					id="lostPetDescInput"
					placeholder="Describe a tu mascota"
				></textarea>

				<label className="form-label" htmlFor="losPetDateInput">
					Fecha de perdida
				</label>
				<input
					{...register("date_lost")}
					className="form-control mb-3"
					type="date"
					placeholder="Fecha en que se perdío"
					id="losPetDateInput"
					required
				/>

				<button className="btn btn-success mt-3" type="submit">
					Registra mascota perdida
				</button>
			</form>
			<ToastContainer />
		</div>
	);
};

export default AddLostPet;
