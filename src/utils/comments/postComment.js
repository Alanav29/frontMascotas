import axios from "axios";
import qs from "qs";
import { commentsBaseEndpoint } from "../../config/apiRoutes";

const postComment = (commentData, postId, postType, token) => {
	let data = qs.stringify({
		text: commentData.text,
		postId,
		postType,
	});

	let config = {
		method: "post",
		maxBodyLength: Infinity,
		url: commentsBaseEndpoint,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: `Bearer ${token}`,
		},
		data: data,
	};

	const postCommentRequest = () => axios(config);
	return postCommentRequest();
};

export default postComment;
