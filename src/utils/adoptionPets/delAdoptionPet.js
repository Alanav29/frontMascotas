import axios from "axios";
import qs from "qs";
import { adoptionPetsBaseEndpoint } from "../../config/apiRoutes";

const delAdoptionPet = (adoptionPetId, token) => {
	let data = qs.stringify({});

	let config = {
		method: "delete",
		maxBodyLength: Infinity,
		url: `${adoptionPetsBaseEndpoint}${adoptionPetId}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
		data: data,
	};

	const delAdoptionPetRequest = () => axios(config);
	return delAdoptionPetRequest();
};

export default delAdoptionPet;
