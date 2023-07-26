/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../features/userFeature";
// import postLostPet from "../../utils/lostPets/postLostPet";
import { useNavigate } from "react-router-dom";
import { setChange } from "../../features/changesCounterFeature";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPetScreen = ({ postPet, petTypeUrl }) => {
	const { register, handleSubmit } = useForm();
	const user = useSelector(selectUser);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const notify = () => {
		toast.success("Estamos agregando a tu mascota", {
			position: toast.POSITION.TOP_CENTER,
		});
	};

	const fetchPostPet = async (data) => {
		let res;

		await postPet(data, user._id, user.token)
			.then((response) => response.text())
			.then((result) => (res = JSON.parse(result)))
			.catch((error) => {
				console.log("Ocurrio un error al agregar la mascota ", error.message);
			});

		if (res._id) {
			navigate(`${petTypeUrl}${res._id}`);
			dispatch(setChange(1));
			console.log("se agrego la mascota");
		}
	};

	const addPet = (data) => {
		notify();
		fetchPostPet(data);
	};

	let dateInput = <></>;
	let petType = " en adopción";

	if (petTypeUrl === "/mascotas-perdidas/") {
		petType = " perdida";
		dateInput = (
			<>
				<label className="form-label" htmlFor="petDateInput">
					Fecha de perdida
				</label>
				<input
					{...register("date_lost")}
					className="form-control mb-3"
					type="date"
					placeholder="Fecha en que se perdío"
					id="petDateInput"
					required
				/>
			</>
		);
	} else if (petTypeUrl === "/mascotas-resguardadas/") {
		petType = " resguardada";
		dateInput = (
			<>
				<label className="form-label" htmlFor="petDateInput">
					Fecha de resguardo
				</label>
				<input
					{...register("date_found")}
					className="form-control mb-3"
					type="date"
					placeholder="Fecha en que se encontro"
					id="petDateInput"
					required
				/>
			</>
		);
	}

	return (
		<div className="container my-4 d-flex flex-column justify-content-center">
			<h1 className="mb-3">Agregar mascota {petType}</h1>
			<form className="d-block" onSubmit={handleSubmit(addPet)}>
				<label className="form-label" htmlFor="petImgInput">
					Foto de mascota
				</label>
				<input
					{...register("image")}
					type="file"
					className="form-control mb-3"
					id="petImgInput"
				/>

				<label className="form-label" htmlFor="petNameInput">
					Nombre de mascota
				</label>
				<input
					{...register("name")}
					className="form-control mb-3"
					type="text"
					placeholder="Name"
					id="petNameInput"
					required
				/>

				<label className="form-label" htmlFor="petDescInput">
					Descripción
				</label>
				<textarea
					{...register("description")}
					className="form-control mb-3"
					aria-label="With textarea"
					id="petDescInput"
					placeholder="Describe a tu mascota"
				></textarea>

				{dateInput}

				<button className="btn btn-success mt-3" type="submit">
					Registrar mascota
				</button>
			</form>
			<ToastContainer />
		</div>
	);
};

export default AddPetScreen;
