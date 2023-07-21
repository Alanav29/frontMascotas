/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../../styles/LostPetCard.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/userFeature";
import delLostPet from "../../utils/lostPets/delLostPet";
import { setChange } from "../../features/changesCounterFeature";

const LostPetCard = ({ lostPet }) => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	let deleteButtonOption = <></>;

	const deleteLostPet = () => {
		const fetchDeleteLostPet = async () => {
			try {
				const result = await delLostPet(lostPet._id, user.token);

				if (result.status === 200) {
					dispatch(setChange(1));
					console.log("se borro mascota perdida");
				}
			} catch (error) {
				console.log("Ocurrio un error al borrar la mascota ", error.message);
			}
		};
		fetchDeleteLostPet();
	};

	if (user.token) {
		deleteButtonOption = (
			<button className="btn btn-danger" onClick={deleteLostPet}>
				Borrar
			</button>
		);
	}

	return (
		<>
			<div className="card cardList m-3 lostPetCard">
				<img
					src={lostPet.image.secure_url}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h1 className="card-title fs-4 colorThree">{lostPet.name}</h1>
					<h2 className="card-title fs-5">Fecha de perdida</h2>
					<p className="card-title fs-6">{lostPet.date_lost}</p>
					<p className="card-title fs-6">{lostPet.description}</p>
					<Link
						to={`/mascotas-perdidas/${lostPet._id}`}
						className="btn bgOne me-2"
					>
						Mas detalles
					</Link>
					{deleteButtonOption}
				</div>
			</div>
		</>
	);
};

export default LostPetCard;
