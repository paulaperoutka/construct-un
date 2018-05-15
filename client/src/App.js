import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Portal from "./components/Portal";
import ChambersPage from "./components/ChambersPage";
import ResolutionsPage from "./pages/ResolutionsPage";
import ScenarioPage from "./components/ScenarioPage";

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Portal} />
          <Route exact path="/securitycouncil" component={ChambersPage} />
          <Route exact path="/resolutions" component={ResolutionsPage} />
          <Route exact path="/scenarios" component={ScenarioPage} />
        </div>
      </Router>
    );
  }
}

export default App;

