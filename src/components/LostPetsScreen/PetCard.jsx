/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../../styles/LostPetCard.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/userFeature";
// import delLostPet from "../../utils/lostPets/delLostPet";
import { setChange } from "../../features/changesCounterFeature";

const PetCard = ({ pet, delPet, cardUrl }) => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	let deleteButtonOption = <></>;
	const fetchDeletePet = async () => {
		try {
			const result = await delPet(pet._id, user.token);

			if (result.status === 200) {
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

	if (user.isAdmin) {
		deleteButtonOption = (
			<button className="btn btn-danger" onClick={deletePet}>
				Borrar
			</button>
		);
	}

	let dateType = "";
	let date = pet.createdAt;
	if (pet.date_lost) {
		dateType = "Fecha de perdida";
		date = pet.date_lost;
	} else if (pet.date_found) {
		dateType = "Fecha en que se encontro";
		date = pet.date_found;
	}

	return (
		<>
			<div className="card m-3 lostPetCard">
				<img src={pet.image.secure_url} className="card-img-top" alt="..." />
				<div className="card-body">
					<h1 className="card-title fs-4 colorThree">{pet.name}</h1>
					<h2 className="card-title fs-5">{dateType}</h2>
					<p className="card-title fs-6">{date}</p>
					<p className="card-title fs-6">{pet.description}</p>
					<Link
						to={`${cardUrl}${pet._id}`}
						className="btn btn-warning text-white me-2"
					>
						Mas detalles
					</Link>
					{deleteButtonOption}
				</div>
			</div>
		</>
	);
};

export default PetCard;
