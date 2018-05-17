import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'
// import Portal from "../../pages/Portal";
import ChambersPage from "../../pages/ChambersPage";
// import ResolutionsPage from "../../pages/ResolutionsPage";
// import ScenarioPage from "../../pages/ScenarioPage";
// import './Main.css';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect  
} from 'react-router-dom'

import ScenarioPage from '../../pages/ScenarioPage'
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import LogoutFunction from './containers/LogoutFunction.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import Auth from './modules/Auth';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props} {...rest} />
    )
  )}/>
)

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )}/>
)

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    }
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (
      <div className="portal-wrapper">
      {/* <Row>
					<Col md="2" />
					<Col md="8">
						<h1 className="portal-header">Construct UN</h1>
						<Form className="portal-content">
							<FormGroup> */}
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
          <div>
            <div className="top-bar">
              {this.state.authenticated ? (
                <div className="top-bar-right">
                  <Link to="/dashboard">
                    <RaisedButton fullWidth={true}>Country Select</RaisedButton>
                  </Link>
                  <Link to="/logout">
                    <RaisedButton fullWidth={true}>Log Out</RaisedButton>
                  </Link>
                  
                </div>
              ) : (
                <div className="top-bar-right">
                  
                    <Link to="/login">
                      <RaisedButton fullWidth={true}>Log in</RaisedButton>
                    </Link>
                    <Link to="/signup">
                      <RaisedButton fullWidth={true}>Sign up</RaisedButton>
                    </Link>
                  
                </div>
              )}

            </div>

            <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <PrivateRoute exact path="/dashboard" component={DashboardPage}/>
            <LoggedOutRoute exact path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <LoggedOutRoute exact path="/signup" component={SignUpPage}/>
            <Route exact path="/logout" component={LogoutFunction}/>
            <Route  path="/securitycouncil" component={ChambersPage} />
            <Route exact path="/instructions" component={ScenarioPage} />
            {/* <Route path="/" component={Portal} /> */}
          {/* <Route  path="/unresolutions" component={ResolutionsPage} />
          <Route  path="/scenarios" component={ScenarioPage} />
          <Route  path="/securitycouncil" component={ChambersPage} /> */}
            
          </div>
        </Router>
      </MuiThemeProvider>
      {/* </FormGroup>
      </Form>
    </Col>
    <Col md="2" />
  </Row> */}
</div>
    );
  }
}

export default Main;
