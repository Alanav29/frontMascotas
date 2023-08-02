/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/userFeature";
import { setChange } from "../features/changesCounterFeature";
import getAdvertisement from "../utils/advertisements/getAdvertisement";
import delAdvertisement from "../utils/advertisements/delAdvertisement";

// import getLostPet from "../../utils/lostPets/getLostPet";
// import delLostPet from "../../utils/lostPets/delLostPet";
// import {getComments, postComment, delComment} from "./../../utils/comments"

const AdvertisementDetail = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const { advertisementId } = useParams({ image: {} });
	const [advertisement, setAdvertisement] = useState({ image: "" });
	let delButton = <></>;

	const fetchGetAdvertisement = async () => {
		try {
			const result = await getAdvertisement(advertisementId);

			if (result.status === 200) {
				setAdvertisement(result.data);
			}
		} catch (error) {
			console.log("Ocurrio un error al traer el anuncio", error.message);
		}
	};

	useEffect(() => {
		fetchGetAdvertisement();
	}, []);

	const fetchDeleteAdvertisement = async () => {
		try {
			const result = await delAdvertisement(advertisementId, user.token);

			if (result.status === 200) {
				navigate("/");
				dispatch(setChange(1));
				console.log("se borro el anuncio");
			}
		} catch (error) {
			console.log("Ocurrio un error al borrar el anuncio", error.message);
		}
	};

	const deleteAdvertisement = () => {
		fetchDeleteAdvertisement();
	};

	if (user.isAdmin) {
		delButton = (
			<button onClick={deleteAdvertisement} className="btn btn-danger me-4">
				Borrar anuncio
			</button>
		);
	}

	return (
		<div className="container my-4">
			<div className="mb-3">
				<div className="d-flex flex-column">
					<div className="d-flex">
						<img
							src={advertisement.image.secure_url}
							className="w-75 mx-auto"
							alt="Advertisement image"
						/>
					</div>
					<div className="w-75 mx-auto">
						<div className="">
							<h5 className="fs-5">{advertisement.title}</h5>
							<p className="fs-6 mb-2">{advertisement.description}</p>
							<h5 className="fs-5">Fecha de creación</h5>
							<h6 className="fs-6">{advertisement.createdAt}</h6>
							<div className="d-flex">{delButton}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdvertisementDetail;
