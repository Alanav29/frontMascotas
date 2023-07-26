import axios from "axios";

import { adoptionPetsBaseEndpoint } from "../../config/apiRoutes";

const configGetAdoptionPets = () => {
	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url: adoptionPetsBaseEndpoint,
	};

	return config;
};

const getAllAdoptionPets = () => axios(configGetAdoptionPets());

export default getAllAdoptionPets;
