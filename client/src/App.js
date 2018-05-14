import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Portal from "./pages/Portal";
import ChambersPage from "./pages/ChambersPage";
import ResolutionssPage from "./pages/ResolutionsPage";
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Portal} />
          <Route exact path="/securitycouncil" component={ChambersPage} />
          <Route exact path="/resolutions" component={ResolutionsPage} />
        </div>
      </Router>
    );
  }
}

export default App;

