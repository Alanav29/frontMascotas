/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import getLostPet from "../utils/lostPets/getLostPet";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/userFeature";
import { setChange } from "../features/changesCounterFeature";
import delLostPet from "../utils/lostPets/delLostPet";
import { useForm } from "react-hook-form";
import putLostPet from "../utils/lostPets/putLostPet";

const LostPetEdit = () => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const { lostPetId } = useParams();
	const [lostPet, setLostPet] = useState({ image: "" });
	const [imgURL, setImgURL] = useState("");
	let formBox = <h5>No puedes editar esta mascota</h5>;

	const fetchGetLostPet = async () => {
		try {
			const result = await getLostPet(lostPetId);

			if (result.status === 200) {
				setLostPet(result.data);
				setImgURL(result.data.image.secure_url);
			}
		} catch (error) {
			console.log(
				"Ocurrio un error al traer la mascota perdida",
				error.message
			);
		}
	};

	useEffect(() => {
		fetchGetLostPet();
	}, []);

	const fetchDeleteLostPet = async () => {
		try {
			const result = await delLostPet(lostPetId, user.token);

			if (result.status === 200) {
				navigate("/");
				dispatch(setChange(1));
				console.log("se borro mascota perdida");
			}
		} catch (error) {
			console.log("Ocurrio un error al borrar la mascota ", error.message);
		}
	};

	const deleteLostPet = () => {
		fetchDeleteLostPet();
	};

	const fetchPutLostPet = async (data) => {
		try {
			const result = await putLostPet(data, lostPetId, user.token);

			if (result.status === 200) {
				navigate("/");
				dispatch(setChange(1));
				console.log("se actualizo la mascota");
			}
		} catch (error) {
			console.log("Ocurrio un error al actualizar la mascota ", error.message);
		}
	};

	const updateLostPet = (data) => {
		fetchPutLostPet(data);
	};

	const setAsFinded = () => {
		let data = { pet_status: true };
		updateLostPet(data);
	};

	if (user.isAdmin || user._id === lostPet.user_id) {
		formBox = (
			<div className="">
				<form className="d-block" onSubmit={handleSubmit(updateLostPet)}>
					<label className="form-label" htmlFor="lostPetImgInput">
						Foto de mascota
					</label>
					<input
						{...register("image", {
							onChange: (e) => {
								setImgURL(URL.createObjectURL(e.target.files[0]));
							},
						})}
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
						placeholder={lostPet.name}
						id="lostPetNameInput"
					/>

					<label className="form-label" htmlFor="lostPetDescInput">
						Descripción
					</label>
					<textarea
						{...register("description")}
						className="form-control mb-3"
						aria-label="With textarea"
						id="lostPetDescInput"
						placeholder={lostPet.description}
					></textarea>

					<label className="form-label" htmlFor="losPetDateInput">
						Fecha de perdida
						<p className="text-black-50 mb-0">{lostPet.date_lost}</p>
					</label>
					<input
						{...register("date_lost")}
						className="form-control mb-3"
						type="date"
						id="losPetDateInput"
					/>

					<button className="btn btn-primary mb-3" type="submit">
						Actualizar mascota
					</button>
				</form>
				<button onClick={deleteLostPet} className="btn btn-danger me-4 mb-3">
					Borrar mascota
				</button>
				<button onClick={setAsFinded} className="btn btn-success me-4 mb-3">
					Marcar como reunido
				</button>
			</div>
		);
	}

	return (
		<div className="container my-4">
			<div className="row g-0">
				<div className="col-md-5 p-4 ps-0">
					<img
						src={imgURL}
						className="img-fluid rounded-start"
						alt="Pet image"
					/>
				</div>
				<div className="col-md-7 p-4">
					<h4>Editar mascota perdida</h4>
					{formBox}
				</div>
			</div>
		</div>
	);
};

export default LostPetEdit;
