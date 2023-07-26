import axios from "axios";

import { shelteredPetsBaseEndpoint } from "../../config/apiRoutes";

const configGetShelteredPets = () => {
	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url: shelteredPetsBaseEndpoint,
	};

	return config;
};

const getAllShelteredPets = () => axios(configGetShelteredPets());

export default getAllShelteredPets;
