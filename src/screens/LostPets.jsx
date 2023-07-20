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

	if (user.token) {
		addPetCard = <AddLostPetCard />;
	}

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

	return (
		<div className="container-fluid">
			<div className="lostPetsFilter">
				<div className="p-2 my-2">Ordenar por</div>
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
