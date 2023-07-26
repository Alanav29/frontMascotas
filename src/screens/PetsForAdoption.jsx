import PetsGeneral from "../components/generalComponents/PetsGeneral";
import getAllAdoptionPets from "../utils/adoptionPets/getAdoptionPets";
import delAdoptionPet from "../utils/adoptionPets/delAdoptionPet";


const PetsForAdoption = () => {
	return (
		<>
			<PetsGeneral
				getPets={getAllAdoptionPets}
				url={"/add-adoption-pet"}
				delPet={delAdoptionPet}
				cardUrl={"/mascotas-en-adopcion/"}
			/>
		</>
	);
};

export default PetsForAdoption;
