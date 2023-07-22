/* eslint-disable react/prop-types */
import { useState } from "react";
import getLostPet from "../utils/lostPets/getLostPet";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/userFeature";
import { setChange } from "../features/changesCounterFeature";
import delLostPet from "../utils/lostPets/delLostPet";
import { useForm } from "react-hook-form";

const LostPetEdit = () => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const { lostPetId } = useParams();
	const [lostPet, setLostPet] = useState({ image: "" });
	const [imgURL, setImgURL] = useState("");
	let delButton = <></>;

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

	useState(() => {
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

	if (user.isAdmin || user._id === lostPet.user_id) {
		delButton = (
			<button onClick={deleteLostPet} className="btn btn-danger me-4">
				Borrar mascota
			</button>
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
					<div className="">
						<form className="d-block" onSubmit={handleSubmit()}>
							<label className="form-label" htmlFor="lostPetImgInput">
								Foto de mascota
							</label>
							<input
								{...register("test", {
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
								Actualizar mascota
							</button>
						</form>
						{delButton}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LostPetEdit;
