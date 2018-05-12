import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Container } from 'reactstrap';
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
			<div className="page-wrapper">
				<Navbar />
				<Container>
					<Row>
						<Col md="4">
							<Newsfeed />
						</Col>
						<Col md="8">
							<World />
							<Chambers />
							<Chat />
						</Col>
					</Row>
				</Container>
		   </div>
// 				<Row>
// 					<Col xs="4">
// 						<Newsfeed />
// 					</Col>
// 					<Col xs="8">
// 						<Row>
// 							<World />
// 						</Row>
// 						<Row>
// 							<Chambers />
// 						</Row>
// 					</Col>
// 				</Row>
// 					<Chat />
// 		  </div>
		);
	}
}

export default ChambersPage;