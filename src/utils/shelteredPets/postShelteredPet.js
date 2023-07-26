import { shelteredPetsBaseEndpoint } from "../../config/apiRoutes";

const postShelteredPet = (petData, user_id, token) => {
	const petInfo = {
		name: petData.name,
		date_found: petData.date_found,
		description: petData.description,
		image: petData.image,
	};

	let myHeaders = new Headers();
	myHeaders.append("Authorization", `Bearer ${token}`);

	let formdata = new FormData();
	formdata.append("name", petInfo.name);
	formdata.append("user_id", user_id);
	formdata.append("date_found", petInfo.date_found);
	formdata.append("description", petInfo.description);
	formdata.append("image", petInfo.image[0]);

	let requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: formdata,
		redirect: "follow",
	};

	return fetch(shelteredPetsBaseEndpoint, requestOptions);
};

export default postShelteredPet;
