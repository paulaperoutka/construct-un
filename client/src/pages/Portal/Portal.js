import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import "./Portal.css";
import Main from '../../components/auth/Main';
// C:\xprojects\construct-un\client\src\components\auth\Main.js

class Portal extends Component {
	state = {
		country: []
	}

	render() {
		return(
			<div className="portal-wrapper">
				<Main />
				<Row>
					<Col md="2" />
					<Col md="8">
						<h1 className="portal-header">Construct UN</h1>
						<Form className="portal-content">
							<FormGroup>
								<FormText>
			            Welcome Ambassador. Please select the country you represent.
			          </FormText>
			          <br />
			          <Label for="country-select">UN Member Nations</Label>
			          <Input type="select" name="select" id="country-select">
			            <option>United States of America</option>
			            <option>Russia</option>
			            <option>United Kingdom</option>
			            <option>China</option>
			            <option>France</option>
			          </Input>
			          <br />
			          <Button>Enter the UN</Button>
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