import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Instructions from "../../components/Instructions";
import NavbarBlank from "../../components/NavbarBlank";
import "./ScenarioPage.css";

class ScenarioPage extends Component {
	render() {
		return (
			<div className="page-wrapper">
				<NavbarBlank />
				<Instructions />
			</div>
		);
	}
}

export default ScenarioPage;