import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Container } from 'reactstrap';
import Navbar from "../../components/Navbar";
import Newsfeed from '../../components/Newsfeed';
import World from '../../components/Map';
import Chambers from '../../components/Chambers';
import Chat from '../../components/Chat';
import VideoPlayer from "../../components/VideoPlayer";
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
							<VideoPlayer />
							<Chat />
						</Col>
						<Col md="8">
							<World />
							<Chambers />
						</Col>
					</Row>
				</Container>
		   </div>
		);
	}
}

export default ChambersPage;