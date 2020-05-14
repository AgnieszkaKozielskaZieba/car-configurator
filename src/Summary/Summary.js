import React, { Component } from "react";

class Summary extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	render() {
		return (
			<div>
				<p>{this.props.configuration.models}</p>
				<p>{this.props.configuration.engines}</p>
				<p>{this.props.configuration.gearboxes}</p>
				<p>{this.props.configuration.colors}</p>
			</div>
		);
	}
}

export default Summary;
