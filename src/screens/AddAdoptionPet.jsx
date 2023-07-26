import AddPetScreen from "../components/generalComponents/AddPetScreen";
import postAdoptionPet from "../utils/adoptionPets/postAdoptiontPet";

const AddAdoptionPet = () => {
	return (
		<AddPetScreen postPet={postAdoptionPet} petTypeUrl={"/mascotas-en-adopcion/"} />
	);
};

export default AddAdoptionPet;
