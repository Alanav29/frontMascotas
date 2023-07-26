import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/userFeature";
import "../../styles/LostPetDetail.css";
import delComment from "../../utils/comments/delComment";
import { setChange } from "../../features/changesCounterFeature";

/* eslint-disable react/prop-types */
const Comment = ({ comment, username }) => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
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

	const userComment = comment.user_id ?? false;

	if (user.isAdmin || user._id == userComment) {
		delButton = (
			<button onClick={deleteComment} className="btn btn-danger">
				Borrar
			</button>
		);
	}

	return (
		<div className="commentBox rounded d-flex flex-row mb-2">
			<div className="me-auto ms-2 d-block">
				<h6 className="d-flex m-0 my-1">{comment.username}</h6>
				<p className="m-0 mb-1">{comment.text}</p>
			</div>
			{delButton}
		</div>
	);
};

export default Comment;
