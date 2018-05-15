import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

<<<<<<< HEAD
import Portal from "./components/Portal";
import ChambersPage from "./components/ChambersPage";
import ScenarioPage from "./components/ScenarioPage";
=======
import Portal from "./pages/Portal";
import ChambersPage from "./pages/ChambersPage";
import ResolutionsPage from "./pages/ResolutionsPage";
>>>>>>> upstream/master
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

