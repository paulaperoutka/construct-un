import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Portal from "./components/Portal";
import Room from "./components/Room";

import { Container } from "reactstrap";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Route exact path="/" component={Portal} />
          <Route exact path="/securitycouncil" component={Room} />
        </Container>
      </Router>
    );
  }
}

export default App;



