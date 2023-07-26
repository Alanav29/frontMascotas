import PetsGeneral from "../components/generalComponents/PetsGeneral";
import getAllShelteredPets from "../utils/shelteredPets/getShelteredPets";
import delShelteredPet from "../utils/shelteredPets/delShelteredPet";

const ShelteredPets = () => {
	return (
		<>
			<PetsGeneral
				getPets={getAllShelteredPets}
				url={"/add-sheltered-pet"}
				delPet={delShelteredPet}
				cardUrl={"/mascotas-resguardadas/"}
			/>
		</>
	);
};

export default ShelteredPets;
