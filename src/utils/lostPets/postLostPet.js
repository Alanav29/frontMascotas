import { lostPetsBaseEndpoint } from "../../config/apiRoutes";

const postLostPet = (petData, user_id, image, token) => {
	const petInfo = {
		name: petData.name,
		date_lost: petData.date_lost,
		description: petData.description,
		image: image,
	};

	let myHeaders = new Headers();
	myHeaders.append("Authorization", `Bearer ${token}`);

	let formdata = new FormData();
	formdata.append("name", petInfo.name);
	formdata.append("user_id", user_id);
	formdata.append("date_lost", petInfo.date_lost);
	formdata.append("description", petInfo.description);
	formdata.append("image", petInfo.image);

	let requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: formdata,
		redirect: "follow",
	};

	return fetch(lostPetsBaseEndpoint, requestOptions);
};

export default postLostPet;
