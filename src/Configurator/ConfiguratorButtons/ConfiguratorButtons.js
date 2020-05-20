import React, { Component } from "react";
import "./ConfiguratorButtons.scss";

class ConfiguratorButtons extends Component {
	render() {
		let buttons = this.props.data.map((el, ind) => {
			let selectedClass = "";
			if (el.name === this.props.selectedEl.name) {
				selectedClass = "selected";
			}
			let colourIcon = null;
			if (el.RGB) {
				colourIcon = (
					<div
						className="colourIcon"
						style={{
							backgroundColor: `rgb(${el.RGB.R}, ${el.RGB.G}, ${el.RGB.B})`,
						}}
					></div>
				);
			}
			return (
				<label key={ind} className={selectedClass}>
					{el.name} {colourIcon}
					<input
						type="radio"
						name={this.props.paramName}
						value={el}
						checked={false}
						onChange={(e) => this.props.handleChange(el)}
					/>
				</label>
			);
		});
		return (
			<div className="buttonSet">
				<h2>{this.props.paramName.toUpperCase()}</h2>
				{buttons}
			</div>
		);
	}
}

export default ConfiguratorButtons;
