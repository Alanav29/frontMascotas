import "../../styles/PetButtonsHome.css";
import PetsButton from "./PetsButton";

const PetButtonsHome = () => {
	return (
		<div className="d-flex justify-content-center">
			<PetsButton
				classBg={"lostPetsBtnHome"}
				buttonText={"Mascotas Perdidas"}
				url={"/mascotas-perdidas"}
			/>
			<PetsButton
				classBg={"shelteredPetsBtnHome"}
				buttonText={"Mascotas Resguardadas"}
				url={"/mascotas-resguardadas"}
			/>
			<PetsButton
				classBg={"adoptionPetsBtnHome"}
				buttonText={"Mascotas en Adopción"}
				url={"/mascotas-en-adopcion"}
			/>
		</div>
	);
};

export default PetButtonsHome;
