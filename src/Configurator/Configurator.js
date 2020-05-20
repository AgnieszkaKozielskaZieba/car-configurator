import React from "react";
import "./Configurator.scss";
import ConfiguratorButtons from "./ConfiguratorButtons/ConfiguratorButtons";

import { useDispatch, useSelector } from "react-redux";
import { selectElement } from "../ConfigurationState/configurationSlice";
import { selectConfiguration } from "../ConfigurationState/configurationSlice";

function Configurator() {
	const dispatch = useDispatch();
	const configuration = useSelector(selectConfiguration);

	const dispatchNewValue = (paramName, selectedElement) => {
		dispatch(
			selectElement({
				paramName: paramName,
				selectedElement: selectedElement,
			})
		);
	};

	let promises = [];
	if (!configuration.fetchedData.dataReady) {
		let models = [];
		let engines = [];
		let gearboxes = [];
		let colors = [];
		promises.push(
			fetch("https://car-configurator-f3a80.firebaseio.com/models.json", {
				method: "GET",
			})
				.then((res) => res.json())
				.then((data) => {
					for (let key in data) {
						models.push(data[key]);
					}
				})
		);

		promises.push(
			fetch(
				"https://car-configurator-f3a80.firebaseio.com/engines.json",
				{
					method: "GET",
				}
			)
				.then((res) => res.json())
				.then((data) => {
					for (let key in data) {
						engines.push(data[key]);
					}
				})
		);

		promises.push(
			fetch(
				"https://car-configurator-f3a80.firebaseio.com/gearboxes.json",
				{
					method: "GET",
				}
			)
				.then((res) => res.json())
				.then((data) => {
					for (let key in data) {
						gearboxes.push(data[key]);
					}
				})
		);

		promises.push(
			fetch("https://car-configurator-f3a80.firebaseio.com/colors.json", {
				method: "GET",
			})
				.then((res) => res.json())
				.then((data) => {
					for (let key in data) {
						colors.push(data[key]);
					}
				})
		);

		Promise.all(promises).then(() => {
			dispatchNewValue("fetchedData", {
				dataReady: true,
				models: models,
				engines: engines,
				gearboxes: gearboxes,
				colors: colors,
			});
		});
	}

	let enginesToDisplay = configuration.fetchedData.engines;
	if (configuration.selectedModel.compatibleEngines) {
		enginesToDisplay = configuration.fetchedData.engines.filter((e) =>
			configuration.selectedModel.compatibleEngines.some(
				(ce) => ce === e.name
			)
		);
	}
	let gearboxesToDisplay = configuration.fetchedData.gearboxes;
	if (configuration.selectedEngine.compatibleGearboxes) {
		gearboxesToDisplay = configuration.fetchedData.gearboxes.filter((g) =>
			configuration.selectedEngine.compatibleGearboxes.some(
				(cg) => cg === g.name
			)
		);
	}

	if (configuration.fetchedData.dataReady) {
		return (
			<div className="configurator">
				<ConfiguratorButtons
					data={configuration.fetchedData.models}
					paramName="models"
					selectedEl={configuration.selectedModel}
					handleChange={(selectedElement) => {
						if (
							!selectedElement.compatibleEngines.some(
								(e) => e === configuration.selectedEngine.name
							)
						) {
							dispatchNewValue("selectedEngine", {});
						}
						dispatchNewValue("selectedModel", selectedElement);
					}}
				/>
				<ConfiguratorButtons
					data={enginesToDisplay}
					paramName="engines"
					selectedEl={configuration.selectedEngine}
					handleChange={(selectedElement) => {
						if (
							!selectedElement.compatibleGearboxes.some(
								(g) => g === configuration.selectedGearbox.name
							)
						) {
							dispatchNewValue("selectedGearbox", {});
						}
						dispatchNewValue("selectedEngine", selectedElement);
					}}
				/>
				<ConfiguratorButtons
					data={gearboxesToDisplay}
					paramName="gearboxes"
					selectedEl={configuration.selectedGearbox}
					handleChange={(selectedElement) =>
						dispatchNewValue("selectedGearbox", selectedElement)
					}
				/>
				<ConfiguratorButtons
					data={configuration.fetchedData.colors}
					paramName="colors"
					selectedEl={configuration.selectedColour}
					handleChange={(selectedElement) =>
						dispatchNewValue("selectedColour", selectedElement)
					}
				/>
			</div>
		);
	}

	return <div>Loading...</div>;
}

export default Configurator;
