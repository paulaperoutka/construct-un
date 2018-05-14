import React, { Component } from 'react';
// import {BrowserRouter as Router, Route} from "react-router-dom";
// import { 
//   Container, 
//   Row, 
//   Col,
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
// } from "reactstrap";
// import logo from './logo.svg';
// import './App.css';
// import World from './components/Map';
// import Chambers from './components/Chambers';
// import Chat from './components/Chat';
// import Newsfeed from "./components/News";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Portal from "./components/Portal";
import ChambersPage from "./components/ChambersPage";
import './App.css';

class App extends Component {

  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  //   this.state = {
  //     isOpen: false
  //   };
  // }

  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // } 

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Portal} />
          <Route exact path="/securitycouncil" component={ChambersPage} />
          <Route exact path="/resolution" component={ResolutionsPage} />
        </div>
      </Router>
    );
  }
}

export default App;

