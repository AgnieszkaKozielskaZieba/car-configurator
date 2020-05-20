import React from "react";
import "./Summary.scss";
import { useSelector } from "react-redux";
import { selectConfiguration } from "../ConfigurationState/configurationSlice";

function Summary() {
	const configuration = useSelector(selectConfiguration);
	const {
		selectedModel,
		selectedEngine,
		selectedGearbox,
		selectedColour,
	} = configuration;
	let sum = 0;
	for (let el in configuration) {
		if (configuration[el].price) sum += configuration[el].price;
	}
	let iconColour = { backgroundColor: "rgb(255, 0, 0)" };
	if (selectedColour.RGB) {
		iconColour = {
			backgroundColor: `rgb(${selectedColour.RGB.R}, ${selectedColour.RGB.G}, ${selectedColour.RGB.B})`,
		};
	}
	return (
		<div className="summary">
			<div className="carImageContainer">
				<div className="carImageCircle">
					<div
						className="carImageCircleColour"
						style={iconColour}
					></div>
				</div>
			</div>
			<div className="textContainer">
				<p>
					<span>Model:</span>
					<span>{selectedModel.name || "-"} </span>
					<span>$ {selectedModel.price || 0} </span>
				</p>
				<p>
					<span>Engine:</span>
					<span>{selectedEngine.name || "-"} </span>
					<span>$ {selectedEngine.price || 0} </span>
				</p>
				<p>
					<span>Gearbox:</span>
					<span>{selectedGearbox.name || "-"} </span>
					<span>$ {selectedGearbox.price || 0} </span>
				</p>
				<p>
					<span>Color:</span>
					<span>{selectedColour.name || "-"} </span>
					<span>$ {selectedColour.price || 0} </span>
				</p>
				<p>
					<span></span>
					<span>TOTAL:</span>
					<span>$ {sum}</span>
				</p>
			</div>
		</div>
	);
}

export default Summary;
