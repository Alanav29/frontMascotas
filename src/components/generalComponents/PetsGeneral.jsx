/* eslint-disable react/prop-types */
import PetCard from "../LostPetsScreen/PetCard";
import "../../styles/PetsScreens.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userFeature";
import AddPetCard from "./AddPetCard";
import { selectChangesCounter } from "../../features/changesCounterFeature";

const PetsGeneral = ({ getPets, url, delPet, cardUrl }) => {
	const [pets, setPets] = useState([]);
	const user = useSelector(selectUser);
	const changesCounter = useSelector(selectChangesCounter);

	let addPetCard = <></>;

	const setAddCard = () => {
		if (user.token) {
			addPetCard = <AddPetCard url={url} />;
		}
	};
	setAddCard();

	useEffect(() => {
		const fetchLostPetsData = async () => {
			try {
				const result = await getPets();

				if (result.status === 200) {
					setPets(result.data);
				}
			} catch (error) {
				console.log(
					"Ocurrio un error al traer las mascotas perdidas",
					error.message
				);
			}
		};
		fetchLostPetsData();
	}, [changesCounter]);

	const [orderChanged, setOrderChanged] = useState(false);
	const [toggleMostRecent, setToggleMostRecent] = useState("");
	const [toggleLessRecent, setToggleLessRecent] = useState("active");

	const mostRecentFilter = () => {
		if (orderChanged == false) {
			setPets(pets.reverse());
			setOrderChanged(true);
			setToggleMostRecent("active");
			setToggleLessRecent("");
		}
	};

	const lessRecentFilter = () => {
		if (orderChanged == true) {
			setPets(pets.reverse());
			setOrderChanged(false);
			setToggleMostRecent("");
			setToggleLessRecent("active");
		}
	};

	return (
		<div className="container-fluid">
			<div className="petsFilter my-3 d-flex">
				<div className="d-flex align-items-center ms-4 me-2">Ordenar por</div>
				<div
					onClick={mostRecentFilter}
					className={`m-2 d-flex align-items-center btn ${toggleMostRecent}`}
				>
					Más recientes
				</div>
				<div
					onClick={lessRecentFilter}
					className={`m-2 d-flex align-items-center btn ${toggleLessRecent}`}
				>
					Más antiguas
				</div>
			</div>
			<div className="petsBox d-flex justify-content-center flex-wrap">
				{addPetCard}
				{pets.map((pet) => (
					<PetCard key={pet._id} pet={pet} delPet={delPet} cardUrl={cardUrl} />
				))}
			</div>
		</div>
	);
};

export default PetsGeneral;
