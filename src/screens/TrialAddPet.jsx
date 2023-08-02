import TrialAddPetScreen from "../components/generalComponents/TrialAddPetScreen";
import TrialPostPet from "../utils/adoptionPets/trialPostPet";

const TrialAddPet = () => {
	return (
		<TrialAddPetScreen
			postPet={TrialPostPet}
			petTypeUrl={"/mascotas-en-adopcion/"}
		/>
	);
};

export default TrialAddPet;
