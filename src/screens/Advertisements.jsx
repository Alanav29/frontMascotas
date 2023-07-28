import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userFeature";
import { selectChangesCounter } from "../features/changesCounterFeature";
import AddPetCard from "../components/generalComponents/AddPetCard";
import AdvertisementCard from "../components/advertisementComponents/AdvertisementCard";
import delAdvertisement from "../utils/advertisements/delAdvertisement";
import getAllAdvertisements from "../utils/advertisements/getAdvertisements";

const Advertisements = () => {
	const [advertisements, setAdvertisements] = useState([]);
	const user = useSelector(selectUser);
	const changesCounter = useSelector(selectChangesCounter);

	useEffect(() => {
		const fetchAdvertisementsData = async () => {
			try {
				const result = await getAllAdvertisements();

				if (result.status === 200) {
					setAdvertisements(result.data);
				}
			} catch (error) {
				console.log("Ocurrio un error al traer los anuncios", error.message);
			}
		};
		fetchAdvertisementsData();
	}, [changesCounter]);

	let pageContent = <h1>Solo para administradores</h1>;

	if (user.isAdmin) {
		pageContent = (
			<>
				<div className="d-flex justify-content-center flex-wrap">
					<AddPetCard url={"/add-advertisement"} />
					{advertisements.map((advertisement) => (
						<AdvertisementCard
							key={advertisement._id}
							advertisement={advertisement}
							delAdvertisement={delAdvertisement}
							cardUrl={"/advertisements/"}
						/>
					))}
				</div>
			</>
		);
	}

	return <div className="container-fluid">{pageContent}</div>;
};

export default Advertisements;
