import PetDetail from "../components/generalComponents/PetDetail";
import delAdoptionPet from "../utils/adoptionPets/delAdoptionPet";
import getComments from "../utils/comments/getComments";
import postComment from "../utils/comments/postComment";
import getAdoptionPet from "../utils/adoptionPets/getAdoptionPet";



const AdoptionPetDetail = () => {
	return (
		<PetDetail
			delPet={delAdoptionPet}
			getComments={getComments}
			postComment={postComment}
			getPet={getAdoptionPet}
			editUrl={"/mascota-en-adopcion-edit/"}
		/>
	);
};

export default AdoptionPetDetail;
