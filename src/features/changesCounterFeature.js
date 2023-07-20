import { createSlice } from "@reduxjs/toolkit";

export const changesCounterFeature = createSlice({
	name: "changesCounter",
	initialState: {
		value: 0,
	},
	reducers: {
		setChange: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { setChange } = changesCounterFeature.actions;

export const selectChangesCounter = (state) => state.changesCounter.value;

export default changesCounterFeature.reducer;
