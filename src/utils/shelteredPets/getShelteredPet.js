import axios from "axios";
import { shelteredPetsBaseEndpoint } from "../../config/apiRoutes";

const getShelteredPet = (petId) => {
	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url: `${shelteredPetsBaseEndpoint}${petId}`,
		headers: {},
	};

	const getShelteredPetRequest = () => axios(config);
	return getShelteredPetRequest();
};

export default getShelteredPet;
