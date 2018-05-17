import React from "react";
import { Col, Button, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Instructions = props => (

	<Row text-align="center">
		<Col md="2" />
		<Col md="8">

			<h2 className="portal-header">Welcome</h2>

			<br />
			<h2>Construct UN</h2>
			<p>A spin on Model UN, CONSTRUCT UN was designed to give users a hands on answer to the question "What is the United Nation s&#63;" </p>
			

			<br />
			<h3>Security Council </h3>
			<p>Take your seat at table on the Security Council. </p>
			<Link to="/securitycouncil"><Button outline color="secondary">Go to Security Council Chamber</Button></Link>

			<br />
			<br />
			<h3>Resolutions</h3>
			<p>For Model UN participants in particular, practice writing proposals and garnering support from peers. </p>
			<Link to="/unresolutions"><Button outline color="secondary">Propose a Resolution</Button></Link>

			<br />
			<br />
			<h3>UN News Articles</h3>
			<p>Read about the latest news coming directly from the UN.  Articles are organized by regions of the world.  Gather inspiration for writing proposals under any of the UN umbrella objectives.</p>


			<br />
			<h3>UN Chatter</h3>
			<p>Chat with other users about recent news, resolutions proposals on the table.</p>

			<br />
			<h3>Live Feed</h3>
			<p>Turn up the volume, expand the video, and watch live feeds directly from the UN Headquarters in New York.  After hours feeds also contain educational documentaries produced by the UN about global news, outreach, etc.</p>

	  </Col>
	  <Col md="2" />
  </Row>
);

export default Instructions;