import { adoptionPetsBaseEndpoint } from "../../config/apiRoutes";

const adoptionLostPet = (data, id, token) => {
	const putAdoptionPetEndpoint = `${adoptionPetsBaseEndpoint}${id}`;

	let myHeaders = new Headers();
	myHeaders.append("Authorization", `Bearer ${token}`);

	let formdata = new FormData();
	if (data.name) {
		formdata.append("name", data.name);
	}
	if (data.date_lost) {
		formdata.append("date_lost", data.date_lost);
	}
	if (data.description) {
		formdata.append("description", data.description);
	}
	if (data.pet_status) {
		formdata.append("pet_status", data.pet_status);
	}
	if (data.image) {
		formdata.append("image", data.image[0]);
	}

	let requestOptions = {
		method: "PUT",
		headers: myHeaders,
		body: formdata,
		redirect: "follow",
	};

	const putAdoptionPetRequest = () => fetch(putAdoptionPetEndpoint, requestOptions);

	return putAdoptionPetRequest();
};

export default adoptionLostPet;
