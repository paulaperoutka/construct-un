import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';
// import '../Main.css';
class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <div>
        <img src="https://i.ytimg.com/vi/T8-YdgU-CF4/maxresdefault.jpg" style={{width: 800 }}/>
      <Card className="container">
          {Auth.isUserAuthenticated() ? (
            <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</CardText>
          ) : (
            <CardText style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</CardText>
          )}
      </Card>
      </div>
    )
  }
};

export default HomePage;
