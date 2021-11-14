import React from 'react';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginButton from './LoginButton';
import {useAuth0} from '@auth0/auth0-react';

class Login extends React.Component {
  
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          <LoginButton loginHandler = {this.props.loginHandler}/>
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
