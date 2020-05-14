import React, { Component } from "react";

class ConfiguratorButtons extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		let buttons = this.props.data.map((el, ind) => {
			return (
				<label key={ind}>
					{el}
					<input
						type="radio"
						name={this.props.paramName}
						value={el}
						onChange={(e) =>
							this.props.handleChange(e.target.value)
						}
					/>
				</label>
			);
		});
		return <div>{buttons}</div>;
	}
}

export default ConfiguratorButtons;
