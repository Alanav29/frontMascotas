import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectUser } from "../../features/userFeature";
import "../../styles/LostPetDetail.css";
import delComment from "../../utils/comments/delComment";
import { setChange } from "../../features/changesCounterFeature";

/* eslint-disable react/prop-types */
const Comment = ({ comment }) => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const { lostPetId } = useParams();
	let delButton = <></>;

	const fetchDeleteComment = async () => {
		try {
			const result = await delComment(comment._id, user.token);

			if (result.status === 200) {
				dispatch(setChange(1));
				console.log("se borro el comentario");
			}
		} catch (error) {
			console.log("Ocurrio un error al borrar el comentario", error.message);
		}
	};

	const deleteComment = () => {
		fetchDeleteComment();
	};

	if (user.isAdmin || comment.user_id == user._id) {
		delButton = (
			<button onClick={deleteComment} className="btn btn-danger">
				Borrar
			</button>
		);
	}

	return (
		<div className="commentBox rounded d-flex flex-row mb-2">
			<div className="me-auto ms-2 d-flex align-items-center">
				{/* <h6 className="ms-3 mb-0 mt-1">{comment.user_name}</h6> */}
				<p className="m-0 d-flex align-items-center me-auto">{comment.text}</p>
			</div>
			{delButton}
		</div>
	);
};

export default Comment;
