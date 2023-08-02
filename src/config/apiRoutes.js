const baseGeneralURL = "https://grumpy-bear-visor.cyclic.cloud/";

// routes fot the users configuration

const usersBaseEndpoint = `${baseGeneralURL}users/`;
const userInfoEndpoint = `${baseGeneralURL}users/userInfo`;
const userSignInEndpoint = `${baseGeneralURL}users/login`;

const lostPetsBaseEndpoint = `${baseGeneralURL}lostPets/`;
const shelteredPetsBaseEndpoint = `${baseGeneralURL}shelteredPets/`;
const adoptionPetsBaseEndpoint = `${baseGeneralURL}adoptionPets/`;

const commentsBaseEndpoint = `${baseGeneralURL}comments/`;

const advertisementsBaseEndpoint = `${baseGeneralURL}advertisements/`;

export {
	usersBaseEndpoint,
	userInfoEndpoint,
	userSignInEndpoint,
	lostPetsBaseEndpoint,
	commentsBaseEndpoint,
	shelteredPetsBaseEndpoint,
	adoptionPetsBaseEndpoint,
	advertisementsBaseEndpoint,
};
