import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Container } from 'reactstrap';
import Navbar from "../../components/Navbar";
import Newsfeed from '../../components/Newsfeed';
import World from '../../components/Map';
import CreateResolution from '../../components/CreateResolution';
import Chat from '../../components/Chat';
import "./ResolutionsPage.css";

class ResolutionsPage extends Component {

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
							<CreateResolution />
							<Chat />
						</Col>
					</Row>
				</Container>
		   </div>
		);
	}
}

export default ResolutionsPage;