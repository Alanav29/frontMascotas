import axios from "axios";
import { commentsBaseEndpoint } from "../../config/apiRoutes";

const getComments = (lostPetId) => {
	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url: `${commentsBaseEndpoint}${lostPetId}`,
		headers: {},
	};

	const getCommentsRequest = () => axios(config);
	return getCommentsRequest();
};

export default getComments;
