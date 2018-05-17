import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Container } from 'reactstrap';
import Navbar from "../../components/Navbar";
import Newsfeed from '../../components/Newsfeed';
import World from '../../components/Map';
import CreateResolution from '../../components/CreateResolution';
import Chat from '../../components/Chat';
import VideoPlayer from "../../components/VideoPlayer";
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
					<Row id="main-content">
						<Col md="4">
							<Newsfeed />
							<VideoPlayer />
						</Col>
						<Col md="8">
							<World />
							<CreateResolution />
						</Col>
					</Row>
					<Row id="chat-footer">
						<Col md="12">
							<Chat />
						</Col>
					</Row>
				</Container>
		   </div>

		);
	}
}

export default ResolutionsPage;
