import { advertisementsBaseEndpoint } from "../../config/apiRoutes";

const postAdvertisement = (advertisementData, image, token) => {
	const advertisementInfo = {
		title: advertisementData.title,
		description: advertisementData.description,
		image: image,
	};

	let myHeaders = new Headers();
	myHeaders.append("Authorization", `Bearer ${token}`);

	let formdata = new FormData();
	formdata.append("title", advertisementInfo.title);
	formdata.append("description", advertisementInfo.description);
	formdata.append("image", image);

	let requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: formdata,
		redirect: "follow",
	};

	return fetch(advertisementsBaseEndpoint, requestOptions);
};

export default postAdvertisement;
