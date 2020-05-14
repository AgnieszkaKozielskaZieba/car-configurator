import React, { Component } from "react";
import ConfiguratorButtons from "./ConfiguratorButtons/ConfiguratorButtons";

class Configurator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			models: [],
			engines: [],
			gearboxes: [],
			colors: [],
		};
	}

	componentDidMount() {
		let models = ["mA", "mB", "mC"];
		let engines = ["eA", "eB", "eC"];
		let gearboxes = ["gA", "gB"];
		let colors = ["red", "green", "blue"];

		this.setState({ models, engines, gearboxes, colors });
	}
	render() {
		return (
			<div>
				<ConfiguratorButtons
					data={this.state.models}
					paramName="models"
					handleChange={(value) =>
						this.props.handleChange("models", value)
					}
				/>

				<ConfiguratorButtons
					data={this.state.engines}
					paramName="engines"
					handleChange={(value) =>
						this.props.handleChange("engines", value)
					}
				/>

				<ConfiguratorButtons
					data={this.state.gearboxes}
					paramName="gearboxes"
					handleChange={(value) =>
						this.props.handleChange("gearboxes", value)
					}
				/>

				<ConfiguratorButtons
					data={this.state.colors}
					paramName="colors"
					handleChange={(value) =>
						this.props.handleChange("colors", value)
					}
				/>
			</div>
		);
	}
}

export default Configurator;
