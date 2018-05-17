import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Main from "./components/auth/Main";
import ChambersPage from "./pages/ChambersPage";
import ResolutionsPage from "./pages/ResolutionsPage";
import ScenarioPage from "./pages/ScenarioPage";
import Instructions from './components/Instructions'
import './App.css';

class App extends Component {

componentDidMount() {
  
  

}

  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={Main} >
          <Route exact path="/unresolutions" component={ResolutionsPage} />
          <Route path="/instructions" component={ScenarioPage} />
          <Route exact path="/instructions" component={Instructions} />
          <Route path="/securitycouncil" component={ChambersPage} />
        </Route>
        </div>
      </Router>
    );
  }
}

export default App;

