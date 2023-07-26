const baseGeneralURL = "http://localhost:8000/api/";

// routes fot the users configuration

const usersBaseEndpoint = `${baseGeneralURL}users/`;
const userInfoEndpoint = `${baseGeneralURL}users/me/`;
const userSignInEndpoint = `${baseGeneralURL}users/login/`;

const lostPetsBaseEndpoint = `${baseGeneralURL}lostPets/`;
const adoptionPetsBaseEndpoint = `${baseGeneralURL}adoptionPets/`

export {
	usersBaseEndpoint,
	userInfoEndpoint,
	userSignInEndpoint,
	lostPetsBaseEndpoint,
	adoptionPetsBaseEndpoint
};
