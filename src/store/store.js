import { configureStore } from "@reduxjs/toolkit";
import userFeature from "../features/userFeature";
import changesCounterFeature from "../features/changesCounterFeature";

export default configureStore({
	reducer: {
		user: userFeature,
		changesCounter: changesCounterFeature,
	},
});
