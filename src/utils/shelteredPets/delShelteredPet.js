import axios from "axios";
import qs from "qs";
import { shelteredPetsBaseEndpoint } from "../../config/apiRoutes";

const delShelteredPet = (shelteredPetId, token) => {
	let data = qs.stringify({});

	let config = {
		method: "delete",
		maxBodyLength: Infinity,
		url: `${shelteredPetsBaseEndpoint}${shelteredPetId}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
		data: data,
	};

	const delShelteredPetRequest = () => axios(config);
	return delShelteredPetRequest();
};

export default delShelteredPet;
