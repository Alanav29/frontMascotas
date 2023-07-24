import axios from "axios";
import { usersBaseEndpoint } from "../../config/apiRoutes";

const getUserInfo = (token) => {
	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url: `${usersBaseEndpoint}userInfo`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const getUserInfoRequest = () => axios(config);
	return getUserInfoRequest();
};

export default getUserInfo;
