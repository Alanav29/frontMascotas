import axios from "axios";
import { commentsBaseEndpoint } from "../../config/apiRoutes";

const delComment = (commentId, token) => {
	let config = {
		method: "delete",
		maxBodyLength: Infinity,
		url: `${commentsBaseEndpoint}${commentId}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const delCommentRequest = () => axios(config);
	return delCommentRequest();
};

export default delComment;
