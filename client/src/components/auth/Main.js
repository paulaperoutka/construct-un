import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import FormGroup from '@material-ui/core/FormGroup'
// import Portal from "../../pages/Portal";
import ChambersPage from "../../pages/ChambersPage";
// import ResolutionsPage from "../../pages/ResolutionsPage";
// import ScenarioPage from "../../pages/ScenarioPage";
import Splash from './Splash'
// import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect  
} from 'react-router-dom'


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
      authenticated: false,
      isStyled: true
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
      
      <Router>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Splash onChange={() => this.setState({ isStyled: false })}>
      
          <div>
            <div className="top-bar">
              {this.state.authenticated ? (
                <div className="top-bar-right">
                  <Link exact="true" to="/dashboard">
                    <Button variant="raised" fullWidth={true}>Country Select</Button>
                  </Link>
                  <Link exact="true" to="/logout">
                    <Button variant="raised" fullWidth={true}>Log Out</Button>
                  </Link>
                </div>
              ) : (
                <div className="top-bar-right">
                  
                    <Link to="/login">
                      <Button>Log in</Button>
                    </Link>
                    <Link to="/signup">
                      <Button>Sign up</Button>
                    </Link>
                  
                </div>
              )}

            </div>

            
            {/* <Route path="/" component={Portal} /> */}
          {/* <Route  path="/unresolutions" component={ResolutionsPage} />
          <Route  path="/scenarios" component={ScenarioPage} />
          <Route  path="/securitycouncil" component={ChambersPage} /> */}
            
          </div>
          </Splash>
          <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <PrivateRoute exact path="/dashboard" component={DashboardPage}/>
            <LoggedOutRoute exact path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <LoggedOutRoute exact path="/signup" component={SignUpPage}/>
            <Route exact path="/logout" component={LogoutFunction}/>
            <Route exact path="/securitycouncil" component={ChambersPage} />
            </MuiThemeProvider>
</Router>


    );
  }
}

export default Main;
