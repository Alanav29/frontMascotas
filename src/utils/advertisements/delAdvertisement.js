import axios from "axios";
import qs from "qs";
import { advertisementsBaseEndpoint } from "../../config/apiRoutes";

const delAdvertisement = (advertisementId, token) => {
	let data = qs.stringify({});

	let config = {
		method: "delete",
		maxBodyLength: Infinity,
		url: `${advertisementsBaseEndpoint}${advertisementId}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
		data: data,
	};

	const delAdvertisementRequest = () => axios(config);
	return delAdvertisementRequest();
};

export default delAdvertisement;
