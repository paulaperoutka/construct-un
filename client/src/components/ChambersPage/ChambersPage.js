import React, { Component } from "react";
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container } from "reactstrap";
import Navbar from "../Navbar";
import Newsfeed from '../Newsfeed';
import World from '../Map';
import Chambers from '../Chambers';
import Chat from '../Chat';
import "./ChambersPage.css";

class ChambersPage extends Component {
	state = {
		country: []
	}

	render() {
		return(
			<div className="wrapper">
				<Navbar />
				<Container>
					<Newsfeed />
					<World />
					<Chambers />
					<Chat />
				</Container>
		   </div>
		);
	}
}

export default ChambersPage;