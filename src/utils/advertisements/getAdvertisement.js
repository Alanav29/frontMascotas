import axios from "axios";
import { advertisementsBaseEndpoint } from "../../config/apiRoutes";

const getAdvertisement = (advertisementId) => {
	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url: `${advertisementsBaseEndpoint}${advertisementId}`,
		headers: {},
	};

	const getAdvertisementRequest = () => axios(config);
	return getAdvertisementRequest();
};

export default getAdvertisement;
