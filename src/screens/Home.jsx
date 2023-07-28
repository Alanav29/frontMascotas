import HomeCarousel from "../components/homeComponents/HomeCarousel";
import HomeDescription from "../components/homeComponents/HomeDescription";
import PetButtonsHome from "../components/homeComponents/PetButtonsHome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectChangesCounter } from "../features/changesCounterFeature";
import getAllAdvertisements from "../utils/advertisements/getAdvertisements";

const Home = () => {
	const [advertisements, setAdvertisements] = useState([
		{ image: { secure_url: "" }, _id: 0 },
		{ image: { secure_url: "" }, _id: 2 },
		{ image: { secure_url: "" }, _id: 3 },
	]);
	const changesCounter = useSelector(selectChangesCounter);

	const fetchAdvertisementsData = async () => {
		try {
			const result = await getAllAdvertisements();

			if (result.status === 200) {
				await setAdvertisements(result.data);
				console.log(advertisements);
			}
		} catch (error) {
			console.log("Ocurrio un error al traer los anuncios", error.message);
		}
	};

	useEffect(() => {
		fetchAdvertisementsData();
	}, [changesCounter]);

	return (
		<>
			<div className="d-flex justify-content-center my-4">
				<HomeCarousel advertisements={advertisements} />
			</div>
			<PetButtonsHome />
			<div className="d-flex justify-content-center my-4">
				<HomeDescription />
			</div>
		</>
	);
};

export default Home;
