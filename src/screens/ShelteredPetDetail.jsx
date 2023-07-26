import PetDetail from "../components/generalComponents/PetDetail";
import delLostPet from "../utils/lostPets/delLostPet";
import getComments from "../utils/comments/getComments";
import postComment from "../utils/comments/postComment";
import getLostPet from "../utils/lostPets/getLostPet";

const ShelteredPetDetail = () => {
	return (
		<PetDetail
			delPet={delLostPet}
			getComments={getComments}
			postComment={postComment}
			getPet={getLostPet}
			editUrl={"/mascota-perdida-edit/"}
		/>
	);
};

export default ShelteredPetDetail;
