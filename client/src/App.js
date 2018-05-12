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
import ScenarioPage from "./components/ScenarioPage";
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
//       <div className="App">

//         <Navbar className="App-header" expand="md">
//           <img src={logo} className="App-logo" alt="logo" />
//           <NavbarBrand href="/" className="App-title">Welcome to Construct UN</NavbarBrand>
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <NavLink href="/components/">Link1</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="*">Link2</NavLink>
//               </NavItem>
//               <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle nav caret>
//                   Options
//                 </DropdownToggle>
//                 <DropdownMenu right>
//                   <DropdownItem>
//                     Option 1
//                   </DropdownItem>
//                   <DropdownItem>
//                     Option 2
//                   </DropdownItem>
//                   <DropdownItem divider />
//                   <DropdownItem>
//                     Reset
//                   </DropdownItem>
//                 </DropdownMenu>
//               </UncontrolledDropdown>
//             </Nav>
//           </Collapse>
//         </Navbar>

//         <Container>

//           <Row>
//             <Col xs="auto">
//               <Newsfeed />
//             </Col>
//           </Row>

//           <Row>
//             <Col xs="auto">
//               <World />
//             </Col>
//           </Row>

//           <Row>
//             <Col xs="auto">
//               <Chambers />
//             </Col>
//           </Row>

//           <Row>
//             <Col xs="auto">
//               <Chat />
//             </Col>
//           </Row>

//         </Container>

//       </div>
//     )
//   }
// }

// export default App;
      <Router>
        <div>
          <Route exact path="/" component={Portal} />
          <Route exact path="/securitycouncil" component={ChambersPage} />
          <Route exact path="/scenarios" component={ScenarioPage} />
        </div>
      </Router>
    );
  }
}

export default App;

