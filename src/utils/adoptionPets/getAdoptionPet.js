import axios from "axios";
import { adoptionPetsBaseEndpoint } from "../../config/apiRoutes";

const getAdoptionPet = (adoptionPetId) => {
	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url: `${adoptionPetsBaseEndpoint}${adoptionPetId}`,
		headers: {}
	};

	const getAdoptionPetRequest = () => axios(config);
	return getAdoptionPetRequest();
};

export default getAdoptionPet;
