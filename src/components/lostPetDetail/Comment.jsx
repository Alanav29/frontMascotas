import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectUser } from "../../features/userFeature";
import "../../styles/LostPetDetail.css";

/* eslint-disable react/prop-types */
const Comment = ({ comment }) => {
	const user = useSelector(selectUser);
	const { lostPetId } = useParams();
	let delButton = <></>;

	const delComment = () => {
		console.log(lostPetId);
	};

	if (user.isAdmin) {
		delButton = (
			<button onClick={delComment} className="btn btn-danger">
				Borrar
			</button>
		);
	}

	return (
		<div className="commentBox rounded d-flex flex-row mb-2">
			<div className="me-auto">
				<h6 className="ms-3 mb-0 mt-1">{comment.user_name}</h6>
				<div className="ms-3 d-flex flex-row align-items-center">
					<p className="m-0 d-flex align-items-center me-auto">
						{comment.comment}
					</p>
				</div>
			</div>
			{delButton}
		</div>
	);
};

export default Comment;
