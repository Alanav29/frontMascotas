import axios from "axios";
import { lostPetsBaseEndpoint } from "../../config/apiRoutes";

const getLostPet = (lostPetId) => {
	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url: `${lostPetsBaseEndpoint}${lostPetId}`,
		headers: {},
	};

	const getLostPetRequest = () => axios(config);
	return getLostPetRequest();
};

export default getLostPet;
