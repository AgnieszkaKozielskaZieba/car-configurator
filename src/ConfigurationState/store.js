import { configureStore } from "@reduxjs/toolkit";
import configurationReducer from "./configurationSlice";

export default configureStore({
	reducer: {
		configuration: configurationReducer,
	},
});
