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
					<Row id="main-content">
						<Col md="4">
							<Newsfeed />
							<VideoPlayer />
						</Col>
						<Col md="8">
							<World data={this.props.data}/>
							<Chambers />
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

export default ChambersPage;