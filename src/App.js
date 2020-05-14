import React from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import {
	selectConfiguration,
	selectElement,
} from "./ConfigurationState/configurationSlice";

import Configurator from "./Configurator/Configurator";
import Summary from "./Summary/Summary";

function App() {
	const configuration = useSelector(selectConfiguration);
	const dispatch = useDispatch();
	console.log(configuration);

	return (
		<div className="App">
			<Configurator
				handleChange={(paramName, selectedElement) => {
					dispatch(
						selectElement({
							paramName: paramName,
							selectedElement: selectedElement,
						})
					);
				}}
			/>
			<Summary configuration={configuration} />
		</div>
	);
}

export default App;
