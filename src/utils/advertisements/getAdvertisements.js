import axios from "axios";

import { advertisementsBaseEndpoint } from "../../config/apiRoutes";

const configGetAdvertisements = () => {
	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url: advertisementsBaseEndpoint,
	};

	return config;
};

const getAllAdvertisements = () => axios(configGetAdvertisements());

export default getAllAdvertisements;
