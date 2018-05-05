import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./Portal.css";

class Portal extends Component {
	state = {
		country: []
	}

	render() {
		return(
			<div className="wrapper">
				<Form>
					<FormGroup>
						<FormText color="muted">
	            Welcome Ambassador. Please select the country you represent.
	          </FormText>
		          <Label for="countrySelect">Select your country</Label>
		          <Input type="select" name="select" id="countrySelect">
		            <option>United States of America</option>
		            <option>Russia</option>
		            <option>United Kingdom</option>
		            <option>China</option>
		            <option>France</option>
		          </Input>
		          <Button>Enter the UN</Button>
		        </FormGroup>
		      </Form>
		    </div>
		);
	}
}

export default Portal;