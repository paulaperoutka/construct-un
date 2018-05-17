import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Main from "./components/auth/Main";
import ChambersPage from "./pages/ChambersPage";
import ResolutionsPage from "./pages/ResolutionsPage";
import ScenarioPage from "./pages/ScenarioPage";

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/unresolutions" component={ResolutionsPage} />
          <Route path="/instructions" component={ScenarioPage} />
          <Route path="/securitycouncil" component={ChambersPage} />
        </div>
      </Router>
    );
  }
}

export default App;

