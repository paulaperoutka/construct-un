import React, { Component } from "react";
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import World from './components/Map';
import Chambers from './components/Chambers';
import Chat from './components/Chat';
import "./ChambersPage.css";

class ChambersPage extends Component {
	state = {
		country: []
	}

	render() {
		return(
			<div className="wrapper">
				<World />
				<Chambers />
				<Chat />
		   </div>
		);
	}
}

export default ChambersPage;