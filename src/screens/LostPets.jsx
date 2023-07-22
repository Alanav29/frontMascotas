import LostPetCard from "../components/LostPetsScreen/LostPetCard";
import "../styles/LostPetsScreen.css";
import { useState, useEffect } from "react";
import getAllLostPets from "../utils/lostPets/getLostPets";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectUser } from "../features/userFeature";
import AddLostPetCard from "../components/LostPetsScreen/AddLostPetCard";
import { selectChangesCounter } from "../features/changesCounterFeature";

const LostPets = () => {
	const [lostPets, setLostPets] = useState([]);
	const user = useSelector(selectUser);
	const changesCounter = useSelector(selectChangesCounter);

	let addPetCard = <></>;

	const setAddCard = () => {
		if (user.token) {
			addPetCard = <AddLostPetCard />;
		}
	};
	setAddCard();

	useEffect(() => {
		const fetchLostPetsData = async () => {
			try {
				const result = await getAllLostPets();

				if (result.status === 200) {
					setLostPets(result.data);
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
			setLostPets(lostPets.reverse());
			setOrderChanged(true);
			setToggleMostRecent("active");
			setToggleLessRecent("");
		}
	};

	const lessRecentFilter = () => {
		if (orderChanged == true) {
			setLostPets(lostPets.reverse());
			setOrderChanged(false);
			setToggleMostRecent("");
			setToggleLessRecent("active");
		}
	};

	return (
		<div className="container-fluid">
			<div className="lostPetsFilter my-3 d-flex">
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
			<div className="lostPetsBox d-flex justify-content-center flex-wrap">
				{addPetCard}
				{lostPets.map((lostPet) => (
					<LostPetCard key={lostPet._id} lostPet={lostPet} />
				))}
			</div>
		</div>
	);
};

export default LostPets;
