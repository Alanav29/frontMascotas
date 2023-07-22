import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectUser } from "../../features/userFeature";

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
		<div className="card d-flex flex-row">
			<div className="ms-3 me-auto d-flex align-items-center">
				{comment.comment}
			</div>
			{delButton}
		</div>
	);
};

export default Comment;
