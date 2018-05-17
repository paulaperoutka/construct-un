import React from 'react';
import { Card } from 'material-ui/Card';
import { Label, Input, FormText } from 'reactstrap';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import {Link } from 'react-router-dom';
const Dashboard = ({ user }) => (
  <Card className="container">
    <FormText>
    	Welcome Ambassador {user.name}. Please select the country you represent.
		</FormText>
    <br />
    <Label for="country-select">UN Member Nations</Label>
    <Input type="select" name="select" id="country-select">
      <option>United States of America</option>
      <option>Russian Federation</option>
      <option>United Kingdom of Great Britain and Northern Ireland</option>
      <option>People's Republic of China</option>
      <option>French Republic</option>
    </Input>
    <br />
    
    <Link to="/instructions">
                    <RaisedButton fullWidth={true}>Enter</RaisedButton>
                  </Link>
    
    
  </Card>
);

export default Dashboard;
