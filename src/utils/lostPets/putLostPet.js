import { lostPetsBaseEndpoint } from "../../config/apiRoutes";

const putLostPet = (petData, id, token) => {
	const putLostPetEndpoint = `${lostPetsBaseEndpoint}${id}`;

	const petInfo = {
		name: petData.name,
		date_lost: petData.date_lost,
		description: petData.description,
		image: petData.image,
		status: petData.status,
	};

	let myHeaders = new Headers();
	myHeaders.append("Authorization", `Bearer ${token}`);

	let formdata = new FormData();
	formdata.append("name", petInfo.name);
	formdata.append("date_lost", petInfo.date_lost);
	formdata.append("description", petInfo.description);
	formdata.append("status", petInfo.status);
	formdata.append("image", petInfo.image[0]);

	let requestOptions = {
		method: "PUT",
		headers: myHeaders,
		body: formdata,
		redirect: "follow",
	};

	const putLostPetRequest = () => fetch(putLostPetEndpoint, requestOptions);

	return putLostPetRequest();
};

export default putLostPet;
