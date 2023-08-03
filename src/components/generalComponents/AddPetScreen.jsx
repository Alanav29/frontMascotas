/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../features/userFeature";
// import postLostPet from "../../utils/lostPets/postLostPet";
import { useNavigate } from "react-router-dom";
import { setChange } from "../../features/changesCounterFeature";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createRef, useState } from "react";
import "cropperjs/dist/cropper.css";
import { Cropper } from "react-cropper";
import { blobToURL, fromURL } from "image-resize-compress";

const TrialAddPetScreen = ({ postPet, petTypeUrl }) => {
	// const [petImage, setPetImage] = useState();
	let cropData = "#";
	const cropperRef = createRef();
	const { register, handleSubmit } = useForm();
	const user = useSelector(selectUser);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const notify = () => {
		toast.success("Estamos agregando a tu mascota", {
			position: toast.POSITION.TOP_CENTER,
		});
	};

	const fetchPostPet = async (data, cropedImg) => {
		let res;

		await postPet(data, user._id, cropedImg, user.token)
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
		let cropedImg = getCropData();
		fromURL(cropedImg, 80, 0, 0, "webp").then((blob) => {
			// will output the converted blob file
			// console.log(blob);
			// will generate a url to the converted file
			blobToURL(blob).then((url) => fetchPostPet(data, url));
		});
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

	const [imgURL, setImgURL] = useState(
		"https://res.cloudinary.com/dtyazhppg/image/upload/v1690938856/petsAddImg_f5hkux.jpg"
	);
	const getCropData = () => {
		if (typeof cropperRef.current?.cropper !== "undefined") {
			cropData = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
		}
		return cropData;
	};

	return (
		<div className="container my-4">
			<h1 className="mb-3">Agregar mascota {petType}</h1>
			<div className="row">
				<div className="col-md-5">
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
				<div className="col-md-7">
					<form className="d-block" onSubmit={handleSubmit(addPet)}>
						<label className="form-label" htmlFor="petImgInput">
							Foto de mascota
						</label>
						<input
							onChange={(e) => {
								let img2 = URL.createObjectURL(e.target.files[0]);
								fromURL(img2, 80, 0, 0, "webp").then((blob) => {
									// will output the converted blob file
									// console.log(blob);
									// will generate a url to the converted file
									blobToURL(blob).then((url) => setImgURL(url));
								});
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
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default TrialAddPetScreen;
