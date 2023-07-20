import axios from "axios";
import qs from "qs";
import { lostPetsBaseEndpoint } from "../../config/apiRoutes";

const delLostPet = (lostPetId, token) => {
	let data = qs.stringify({});

	let config = {
		method: "delete",
		maxBodyLength: Infinity,
		url: `${lostPetsBaseEndpoint}${lostPetId}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
		data: data,
	};

	const delLostPetRequest = () => axios(config);
	return delLostPetRequest();
};

export default delLostPet;
