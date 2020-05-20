import { createSlice } from "@reduxjs/toolkit";

export const configurationSlice = createSlice({
	name: "configuration",
	initialState: {
		fetchedData: {
			models: [],
			engines: [],
			gearboxes: [],
			colors: [],
			dataReady: false,
		},

		selectedModel: {},
		selectedEngine: {},
		selectedGearbox: {},
		selectedColour: {},
	},
	reducers: {
		selectElement: (state, action) => {
			state[action.payload.paramName] = action.payload.selectedElement;
		},
	},
});

export const { selectElement } = configurationSlice.actions;

export const selectConfiguration = (state) => state.configuration;

export default configurationSlice.reducer;
