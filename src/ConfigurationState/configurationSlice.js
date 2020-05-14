import { createSlice } from "@reduxjs/toolkit";

export const configurationSlice = createSlice({
	name: "configuration",
	initialState: {
		models: [],
		engines: [],
		gearboxes: [],
		colors: [],
	},
	reducers: {
		selectElement: (state, action) => {
			state[action.payload.paramName] = action.payload.selectedElement;
		},
	},
});

export const { selectElement } = configurationSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = (state) => state.counter.value;
export const selectConfiguration = (state) => state.configuration;
// export const selectEngine = (state) => state.configuration.models;
// export const selectGearbox = (state) => state.configuration.models;
// export const selectColor = (state) => state.configuration.models;

export default configurationSlice.reducer;
