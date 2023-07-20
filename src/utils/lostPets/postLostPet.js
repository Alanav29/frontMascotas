import { lostPetsBaseEndpoint } from "../../config/apiRoutes";

const postLostPet = (petData, owner, token) => {
	const petInfo = {
		name: petData.name,
		date_lost: petData.date_lost,
		description: petData.description,
		image: petData.image,
	};

	var myHeaders = new Headers();
	myHeaders.append("Authorization", `Bearer ${token}`);

	var formdata = new FormData();
	formdata.append("name", petInfo.name);
	formdata.append("owner", owner);
	formdata.append("date_lost", petInfo.date_lost);
	formdata.append("description", petInfo.description);
	formdata.append("image", petInfo.image[0]);

	var requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: formdata,
		redirect: "follow",
	};

	const postLostPetRequest = () => fetch(lostPetsBaseEndpoint, requestOptions);

	return postLostPetRequest();
};

export default postLostPet;
