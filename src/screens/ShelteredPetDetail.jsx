import PetDetail from "../components/generalComponents/PetDetail";
import delShelteredPet from "../utils/shelteredPets/delShelteredPet";
import getComments from "../utils/comments/getComments";
import postComment from "../utils/comments/postComment";
import getShelteredPet from "../utils/shelteredPets/getShelteredPet";

const ShelteredPetDetail = () => {
	return (
		<PetDetail
			delPet={delShelteredPet}
			getComments={getComments}
			postComment={postComment}
			getPet={getShelteredPet}
			editUrl={"/mascota-resguardada-edit/"}
		/>
	);
};

export default ShelteredPetDetail;
