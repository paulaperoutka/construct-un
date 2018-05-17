import React from 'react';
import { Card } from 'material-ui/Card';
import { Label, Input, FormText } from 'reactstrap';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import {Link, NavLink } from 'react-router-dom';
const Dashboard = ({ user }) => (
  <Card className="container">
    <FormText>
    	Welcome Ambassador {user.name}. Please select the country you represent.
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
    <RaisedButton fullWidth={true}>
    <NavLink exact="true" to="/securitycouncil">Enter the UN</NavLink>
    </RaisedButton>
  </Card>
);

export default Dashboard;
