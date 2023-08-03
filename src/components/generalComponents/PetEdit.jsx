/* eslint-disable react/prop-types */
import { useEffect, useState, createRef } from "react";
// import getLostPet from "../../utils/lostPets/getLostPet";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../features/userFeature";
import { setChange } from "../../features/changesCounterFeature";
// import delLostPet from "../../utils/lostPets/delLostPet";
import { useForm } from "react-hook-form";
// import putLostPet from "../../utils/lostPets/putLostPet";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";

const PetEdit = ({ getPet, delPet, putPet, petTypeUrl }) => {
	const notify = () => {
		toast.success("Estamos actualizando tu mascota", {
			position: toast.POSITION.TOP_CENTER,
		});
	};
	let cropData = "#";
	const cropperRef = createRef();
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const { petId } = useParams();
	const [pet, setPet] = useState({ image: "" });
	const [imgURL, setImgURL] = useState("");
	let formBox = <h5>No puedes editar esta mascota</h5>;

	const fetchGetPet = async () => {
		try {
			const result = await getPet(petId);

			if (result.status === 200) {
				setPet(result.data);
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
		fetchGetPet();
	}, []);

	const fetchDeletePet = async () => {
		try {
			const result = await delPet(petId, user.token);

			if (result.status === 200) {
				navigate(petTypeUrl);
				dispatch(setChange(1));
				console.log("se borro mascota perdida");
			}
		} catch (error) {
			console.log("Ocurrio un error al borrar la mascota ", error.message);
		}
	};

	const deletePet = () => {
		fetchDeletePet();
	};

	const getCropData = () => {
		if (typeof cropperRef.current?.cropper !== "undefined") {
			cropData = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
		}
		return cropData;
	};

	const fetchPutPet = async (data, cropedImg) => {
		try {
			const result = await putPet(data, petId, cropedImg, user.token);

			if (result.status === 200) {
				navigate(`${petTypeUrl}${petId}`);
				dispatch(setChange(1));
				console.log("se actualizo la mascota");
			}
		} catch (error) {
			console.log("Ocurrio un error al actualizar la mascota ", error.message);
		}
	};

	const updatePet = (data) => {
		let cropedImg = getCropData();
		notify();
		fetchPutPet(data, cropedImg);
	};

	const setAsFinded = () => {
		let data = { pet_status: true };
		updatePet(data);
	};

	let petType = " en adopción";
	let setAsFindedBtn = <></>;
	if (pet.pet_status === false) {
		setAsFindedBtn = (
			<button onClick={setAsFinded} className="btn btn-success me-4 mb-3">
				Marcar como reunido
			</button>
		);
	}

	if (user.isAdmin || user._id === pet.user_id) {
		if (petTypeUrl === "/mascotas-perdidas/") {
			petType = " perdida";
			formBox = (
				<div className="">
					<form className="d-block" onSubmit={handleSubmit(updatePet)}>
						<label className="form-label" htmlFor="petImgInput">
							Foto de mascota
						</label>
						<input
							onChange={(e) => {
								setImgURL(URL.createObjectURL(e.target.files[0]));
							}}
							type="file"
							className="form-control mb-3"
							id="petImgInput"
							required
						/>

						<label className="form-label" htmlFor="petNameInput">
							Nombre de mascota
						</label>
						<input
							{...register("name")}
							className="form-control mb-3"
							type="text"
							placeholder={pet.name}
							id="petNameInput"
						/>

						<label className="form-label" htmlFor="petDescInput">
							Descripción
						</label>
						<textarea
							{...register("description")}
							className="form-control mb-3"
							aria-label="With textarea"
							id="petDescInput"
							placeholder={pet.description}
						></textarea>

						<label className="form-label" htmlFor="petDateInput">
							Fecha de perdida
							<p className="text-black-50 mb-0">{pet.date_lost}</p>
						</label>
						<input
							{...register("date_lost")}
							className="form-control mb-3"
							type="date"
							id="petDateInput"
						/>

						<button className="btn btn-primary mb-3" type="submit">
							Actualizar mascota
						</button>
					</form>
					<button onClick={deletePet} className="btn btn-danger me-4 mb-3">
						Borrar mascota
					</button>
					{setAsFindedBtn}
				</div>
			);
		} else if (petTypeUrl === "/mascotas-resguardadas/") {
			petType = " resguardada";
			formBox = (
				<div className="">
					<form className="d-block" onSubmit={handleSubmit(updatePet)}>
						<label className="form-label" htmlFor="petImgInput">
							Foto de mascota
						</label>
						<input
							onChange={(e) => {
								setImgURL(URL.createObjectURL(e.target.files[0]));
							}}
							type="file"
							className="form-control mb-3"
							id="petImgInput"
							required
						/>

						<label className="form-label" htmlFor="petNameInput">
							Nombre de mascota
						</label>
						<input
							{...register("name")}
							className="form-control mb-3"
							type="text"
							placeholder={pet.name}
							id="petNameInput"
						/>

						<label className="form-label" htmlFor="petDescInput">
							Descripción
						</label>
						<textarea
							{...register("description")}
							className="form-control mb-3"
							aria-label="With textarea"
							id="petDescInput"
							placeholder={pet.description}
						></textarea>

						<label className="form-label" htmlFor="petDateInput">
							Fecha de resguardo
							<p className="text-black-50 mb-0">{pet.date_found}</p>
						</label>
						<input
							{...register("date_found")}
							className="form-control mb-3"
							type="date"
							id="petDateInput"
						/>

						<button className="btn btn-primary mb-3" type="submit">
							Actualizar mascota
						</button>
					</form>
					<button onClick={deletePet} className="btn btn-danger me-4 mb-3">
						Borrar mascota
					</button>
					{setAsFindedBtn}
				</div>
			);
		} else {
			formBox = (
				<div className="">
					<form className="d-block" onSubmit={handleSubmit(updatePet)}>
						<label className="form-label" htmlFor="petImgInput">
							Foto de mascota
						</label>
						<input
							onChange={(e) => {
								setImgURL(URL.createObjectURL(e.target.files[0]));
							}}
							type="file"
							className="form-control mb-3"
							id="petImgInput"
							required
						/>

						<label className="form-label" htmlFor="petNameInput">
							Nombre de mascota
						</label>
						<input
							{...register("name")}
							className="form-control mb-3"
							type="text"
							placeholder={pet.name}
							id="petNameInput"
						/>

						<label className="form-label" htmlFor="petDescInput">
							Descripción
						</label>
						<textarea
							{...register("description")}
							className="form-control mb-3"
							aria-label="With textarea"
							id="petDescInput"
							placeholder={pet.description}
						></textarea>

						<button className="btn btn-primary mb-3" type="submit">
							Actualizar mascota
						</button>
					</form>
					<button onClick={deletePet} className="btn btn-danger me-4 mb-3">
						Borrar mascota
					</button>

					{setAsFindedBtn}
				</div>
			);
		}
	}

	return (
		<div className="container my-4">
			<div className="row g-0">
				<div className="col-md-5 p-4 ps-0">
					<Cropper
						ref={cropperRef}
						style={{ height: 250, width: "100%" }}
						scale={1}
						aspectRatio={12 / 9}
						src={imgURL}
						cropBoxResizable={true}
						viewMode={2}
						minCropBoxHeight={50}
						background={false}
						autoCropArea={1}
						checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
						guides={true}
					/>
				</div>
				<div className="col-md-7 p-4">
					<h4>Editar mascota {petType}</h4>
					{formBox}
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default PetEdit;
