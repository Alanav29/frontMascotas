import HomeCarousel from "../components/homeComponents/HomeCarousel";
import HomeDescription from "../components/homeComponents/HomeDescription";
import PetButtonsHome from "../components/homeComponents/PetButtonsHome";

const Home = () => {
	return (
		<>
			<div className="d-flex justify-content-center my-4">
				<HomeCarousel />
			</div>
			<PetButtonsHome />
			<div className="d-flex justify-content-center my-4">
				<HomeDescription />
			</div>
		</>
	);
};

export default Home;
