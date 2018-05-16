import React from "react";
import { Button, Col, Container, Form, FormGroup, FormText, Input, Jumbotron, Label, Row, Text } from "reactstrap";

const Resolution = props => (
	<div className="">
		<Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Propose A Resolution</h1>
          </Jumbotron>
          <form>
            <Input name="state" placeholder="State (required)" />
            <Input name="resolutionTitle" placeholder="Resolution Title (required)" />
            <Input type="select" name="sponsoringStates" placeholder="Sponsoring State (required)">
	            <option>United States of America</option>
	            <option>Russia</option>
	            <option>United Kingdom</option>
	            <option>China</option>
	            <option>France</option>
	          </Input>
            <Input type="select" name="objective" placeholder="UN Objective (required)">
	            <option>Maintain International Peace and Security</option>
	            <option>Protect Human Rights</option>
	            <option>Deliver Humanitarian Aid</option>
	            <option>Promote Sustainable Development</option>
	            <option>Uphold International Law</option>
            </Input>
          	<Input type="textarea" name="proposal" placeholder="Proposal (Optional)" />
            <Button>Submit Resolution</Button>
          </form>
        </Col>
      </Row>
    </Container>
	</div>
)

export default Resolution;