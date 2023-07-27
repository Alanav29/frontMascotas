/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setChange } from "../../features/changesCounterFeature";
import { selectUser } from "../../features/userFeature";
import "../../styles/LostPetCard.css";

const AdvertisementCard = ({ advertisement, cardUrl, delAdvertisement }) => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const fetchDeleteAdvertisement = async () => {
		try {
			const result = await delAdvertisement(advertisement._id, user.token);

			if (result.status === 200) {
				dispatch(setChange(1));
				console.log("se borro el anuncio");
			}
		} catch (error) {
			console.log("Ocurrio un error al borrar el anuncio ", error.message);
		}
	};

	const deleteAdvertisement = () => {
		fetchDeleteAdvertisement();
	};

	return (
		<div>
			<>
				<div className="card m-3 lostPetCard">
					<img
						src={advertisement.image.secure_url}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h1 className="card-title fs-4 colorThree">{advertisement.name}</h1>
						<h2 className="card-title fs-5">Creado el</h2>
						<p className="card-title fs-6">{advertisement.createdAt}</p>
						<p className="card-title fs-6">{advertisement.description}</p>
						<Link
							to={`${cardUrl}${advertisement._id}`}
							className="btn btn-warning text-white me-2"
						>
							Mas detalles
						</Link>
						<button className="btn btn-danger" onClick={deleteAdvertisement}>
							Borrar
						</button>
					</div>
				</div>
			</>
		</div>
	);
};

export default AdvertisementCard;
