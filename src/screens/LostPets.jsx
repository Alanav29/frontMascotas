import LostPetCard from "../components/LostPetsScreen/LostPetCard";
import "../styles/LostPetsScreen.css";

const LostPets = () => {
	return (
		<div className="d-flex">
			<div className="lostPetsFilter">
				<div className="lostPetsFilterBox">filter</div>
			</div>
			<LostPetCard />
		</div>
	);
};

export default LostPets;
