import AddPetScreen from "../components/generalComponents/AddPetScreen";
import postLostPet from "../utils/lostPets/postLostPet";

const AddLostPet = () => {
	return (
		<AddPetScreen postPet={postLostPet} petTypeUrl={"/mascotas-perdidas/"} />
	);
};

export default AddLostPet;
