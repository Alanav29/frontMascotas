/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../features/userFeature";
import postAdvertisement from "../../utils/advertisements/postAdvertisement";
import { useNavigate } from "react-router-dom";
import { setChange } from "../../features/changesCounterFeature";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, createRef } from "react";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";

const AddAdvertisementScreen = () => {
	const { register, handleSubmit } = useForm();
	const user = useSelector(selectUser);
	const [imgURL, setImgURL] = useState(
		"https://res.cloudinary.com/dtyazhppg/image/upload/v1690938856/petsAddImg_f5hkux.jpg"
	);
	let cropData = "#";
	const cropperRef = createRef();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const notify = () => {
		toast.success("Estamos agregando el anuncio", {
			position: toast.POSITION.TOP_CENTER,
		});
	};

	const fetchPostAdvertisement = async (data, image) => {
		let res;

		await postAdvertisement(data, image, user.token)
			.then((response) => response.text())
			.then((result) => (res = JSON.parse(result)))
			.catch((error) => {
				console.log("Ocurrio un error al agregar el anuncio ", error.message);
			});

		if (res._id) {
			navigate("/");
			dispatch(setChange(1));
			console.log("se agrego el anuncio");
		}
	};

	const addAdvertisement = (data) => {
		let cropedImg = getCropData();
		notify();
		fetchPostAdvertisement(data, cropedImg);
	};

	const getCropData = () => {
		if (typeof cropperRef.current?.cropper !== "undefined") {
			cropData = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
		}
		return cropData;
	};

	let pageContent = <h1>Solo para administradores</h1>;

	if (user.isAdmin) {
		pageContent = (
			<>
				<h1 className="mb-3">Agregar anuncio</h1>
				<Cropper
					ref={cropperRef}
					style={{ height: 250, width: "100%" }}
					scale={1}
					aspectRatio={3 / 1}
					src={imgURL}
					cropBoxResizable={true}
					viewMode={2}
					minCropBoxHeight={50}
					background={false}
					autoCropArea={1}
					checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
					guides={true}
				/>
				<form className="d-block" onSubmit={handleSubmit(addAdvertisement)}>
					<label className="form-label" htmlFor="advertisementImgInput">
						Imagen
					</label>
					<input
						onChange={(e) => {
							setImgURL(URL.createObjectURL(e.target.files[0]));
						}}
						type="file"
						className="form-control mb-3"
						id="advertisementImgInput"
						required
					/>

					<label className="form-label" htmlFor="advertisementTitleInput">
						Titulo del anuncio
					</label>
					<input
						{...register("title")}
						className="form-control mb-3"
						type="text"
						placeholder="Agrega un titulo a tu anuncio"
						id="advertisementTitleInput"
						required
					/>

					<label className="form-label" htmlFor="advertisementDescInput">
						Descripción
					</label>
					<textarea
						{...register("description")}
						className="form-control mb-3"
						aria-label="With textarea"
						id="advertisementDescInput"
						placeholder="Escribe las bases del anuncio"
					></textarea>

					<button className="btn btn-success mt-3" type="submit">
						Registrar anuncio
					</button>
				</form>
				<ToastContainer />
			</>
		);
	}

	return (
		<div className="container my-4 d-flex flex-column justify-content-center">
			{pageContent}
		</div>
	);
};

export default AddAdvertisementScreen;
