import { configureStore } from "@reduxjs/toolkit";
import userFeature from "../features/userFeature";

export default configureStore({
	reducer: {
		user: userFeature,
	},
});
