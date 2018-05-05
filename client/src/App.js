import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Portal from "./components/Portal";

// import World from './components/Map';
// import Chambers from './components/Chambers';
// import Chat from './components/Chat';

import { Container } from "reactstrap";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Route exact path="/" component={Portal} />
        </Container>
      </Router>
    );
  }
}

export default App;

// <World />
// <Chambers />
// <Chat />


