import HomeCarousel from "../components/homeComponents/HomeCarousel";
import HomeDescription from "../components/homeComponents/HomeDescription";
import PetButtonsHome from "../components/homeComponents/PetButtonsHome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectChangesCounter } from "../features/changesCounterFeature";
import getAllAdvertisements from "../utils/advertisements/getAdvertisements";
import "../styles/Home.css";

const Home = () => {
	const [advertisements, setAdvertisements] = useState();
	const changesCounter = useSelector(selectChangesCounter);

	const fetchAdvertisementsData = async () => {
		try {
			const result = await getAllAdvertisements();

			if (result.status === 200) {
				await setAdvertisements(result.data);
			}
		} catch (error) {
			console.log("Ocurrio un error al traer los anuncios", error.message);
		}
	};

	useEffect(() => {
		fetchAdvertisementsData();
	}, [changesCounter]);

	let adsDiv = <></>;
	if (advertisements) {
		adsDiv = (
			<div className="d-flex justify-content-center py-4 ">
				<HomeCarousel advertisements={advertisements} />
			</div>
		);
	}

	return (
		<>
			<div className="d-flex justify-content-center px-4 py-4 homeDesc">
				<HomeDescription />
			</div>
			<div className="homeButtons">
				<PetButtonsHome />
			</div>
			{adsDiv}
		</>
	);
};

export default Home;
