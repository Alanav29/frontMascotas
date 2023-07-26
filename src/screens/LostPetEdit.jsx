import PetEdit from "../components/generalComponents/PetEdit";
import getLostPet from "../utils/lostPets/getLostPet";
import delLostPet from "../utils/lostPets/delLostPet";
import putLostPet from "../utils/lostPets/putLostPet";

const LostPetEdit = () => {
	return (
		<PetEdit
			getPet={getLostPet}
			delPet={delLostPet}
			putPet={putLostPet}
			petTypeUrl={"/mascotas-perdidas/"}
		/>
	);
};

export default LostPetEdit;
