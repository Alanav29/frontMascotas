import AddPetScreen from "../components/generalComponents/AddPetScreen";
import postShelteredPet from "../utils/shelteredPets/postShelteredPet";

const AddShelteredPet = () => {
	return (
		<AddPetScreen
			postPet={postShelteredPet}
			petTypeUrl={"/mascotas-resguardadas/"}
		/>
	);
};

export default AddShelteredPet;
