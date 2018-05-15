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
							<Row>
								<VideoPlayer />
							</Row>
							<Row>
								<Newsfeed />
							</Row>
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