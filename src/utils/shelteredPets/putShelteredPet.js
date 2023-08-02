import { shelteredPetsBaseEndpoint } from "../../config/apiRoutes";

const putShelteredPet = (data, id, image, token) => {
	const putShelteredPetEndpoint = `${shelteredPetsBaseEndpoint}${id}`;

	let myHeaders = new Headers();
	myHeaders.append("Authorization", `Bearer ${token}`);

	let formdata = new FormData();
	if (data.name) {
		formdata.append("name", data.name);
	}
	if (data.date_found) {
		formdata.append("date_found", data.date_found);
	}
	if (data.description) {
		formdata.append("description", data.description);
	}
	if (data.pet_status) {
		formdata.append("pet_status", data.pet_status);
	}
	if (image) {
		formdata.append("image", image);
	}

	let requestOptions = {
		method: "PUT",
		headers: myHeaders,
		body: formdata,
		redirect: "follow",
	};

	const putShelteredRequest = () =>
		fetch(putShelteredPetEndpoint, requestOptions);

	return putShelteredRequest();
};

export default putShelteredPet;
