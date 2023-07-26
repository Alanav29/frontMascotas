import PetEdit from "../components/generalComponents/PetEdit";
import getAdoptionPet from "../utils/adoptionPets/getAdoptionPet";
import delAdoptionPet from "../utils/lostPets/delAdoptionPet";
import putAdoptionPet from "../utils/lostPets/putAdoptionPet";

const AdoptionPetEdit = () => {
	return (
		<PetEdit
			getPet={getAdoptionPet}
			delPet={delAdoptionPet}
			putPet={putAdoptionPet}
			petTypeUrl={"/mascotas-en-adopcion/"}
		/>
	);
};

export default AdoptionPetEdit;