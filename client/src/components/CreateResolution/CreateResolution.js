import React, {Component} from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { Alert, Button, Card, Col, Container, Form, FormGroup, FormText, Input, Jumbotron, Label, Row, Text } from "reactstrap";

class CreateResolution extends Component {

	state = {
		memberNation: "",
		resolutionTitle: "",
		sponsoringState: "",
		objective: "",
		proposal: "",
		isValid: true
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    if(this.state.memberNation && this.state.resolutionTitle && this.state.sponsoringState && this.state.objective && this.state.proposal) {
      this.setState({
        isValid: true
      });
      axios.post("/api/resolutions", this.state)
        .then(res => this.props.history.push("/"))
        .catch(err => console.log(err));
    }
    else {
      this.setState({
        isValid: false
      });
    }
  }


	componentDidMount() {
		axios.get("/api/resolutions")
			.then(res => {
				this.setState({
					resolutions: res.data
				});
			})
			.catch(err => console.log(err));
	}

	render () {
		return (
			<div className="">
				<Container fluid>
		      <Row>
		        <Col size="md-6">
		        	<Card>
			          <Jumbotron>
			            <h1>Propose A Resolution</h1>
			          </Jumbotron>
			          <form>
			            <Input name="memberNation" placeholder="Nation (required)" />
			            <Input name="resolutionTitle" placeholder="Resolution Title (required)" />
			            <Input type="select" name="sponsoringState">
			            	<option>Sponsoring State (required)</option>
			            	<option>United States of America</option>
				            <option>Russia</option>
				            <option>United Kingdom</option>
				            <option>China</option>
				            <option>France</option>
			            </Input>
			            <Input type="select" name="objective">
			            	<option>UN Objective (required)</option>
				            <option>Maintain International Peace and Security</option>
				            <option>Protect Human Rights</option>
				            <option>Deliver Humanitarian Aid</option>
				            <option>Promote Sustainable Development</option>
				            <option>Uphold International Law</option>
				          </Input>
			          	<Input type="textarea" name="proposal" placeholder="Proposal (Optional)" />
			            <Button onClick={this.onSubmit} color="info">Submit Resolution</Button>
			          </form>
			          <br />
				        { !this.state.isValid && (
				            <Alert color="danger">
				              Resolution must be complete before submission accepted.
				            </Alert>
				          )
				        }
				      </Card>
		        </Col>
		      </Row>
		    </Container>
			</div>
		);
	}
}


export default CreateResolution;