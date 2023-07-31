import "../../styles/PetButtonsHome.css";
import PetsButton from "./PetsButton";

const PetButtonsHome = () => {
	return (
		<div className="d-flex justify-content-center homeButtons">
			<div className="d-flex bg-white buttonsBox rounded-3 mx-2">
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
		</div>
	);
};

export default PetButtonsHome;
