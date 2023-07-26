import PetsGeneral from "../components/generalComponents/PetsGeneral";
import getAllLostPets from "../utils/lostPets/getLostPets";
import delLostPet from "../utils/lostPets/delLostPet";

const LostPets = () => {
	return (
		<>
			<PetsGeneral
				getPets={getAllLostPets}
				url={"/add-lost-pet"}
				delPet={delLostPet}
				cardUrl={"/mascotas-perdidas/"}
			/>
		</>
	);
};

export default LostPets;
