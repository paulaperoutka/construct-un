import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import "./Portal.css";
import Main from '../../components/auth/Main';


class Portal extends Component {
	state = {
		country: []
	}

	render() {
		return(
			<div className="portal-wrapper">
				
				<Row>
					<Col md="2" />
					<Col md="8">
						<h1 className="portal-header">Construct UN</h1>
						<Form className="portal-content">
							<FormGroup>
								<Main />
				      </FormGroup>
				    </Form>
				  </Col>
				  <Col md="2" />
			  </Row>
		  </div>
		);
	}
}

export default Portal;