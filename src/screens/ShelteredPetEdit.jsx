import PetEdit from "../components/generalComponents/PetEdit";
import getShelteredPet from "../utils/shelteredPets/getShelteredPet";
import delShelteredPet from "../utils/shelteredPets/delShelteredPet";
import putShelteredPet from "../utils/shelteredPets/putShelteredPet";

const ShelteredPetEdit = () => {
	return (
		<PetEdit
			getPet={getShelteredPet}
			delPet={delShelteredPet}
			putPet={putShelteredPet}
			petTypeUrl={"/mascotas-resguardadas/"}
		/>
	);
};

export default ShelteredPetEdit;
