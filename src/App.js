import React from "react";
import "./App.scss";

import Configurator from "./Configurator/Configurator";
import Summary from "./Summary/Summary";

function App() {
	return (
		<div className="App">
			<Configurator />
			<Summary />
		</div>
	);
}

export default App;
