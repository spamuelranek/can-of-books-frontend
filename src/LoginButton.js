import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import LoginForm from './LoginForm';

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: true
    }
  }

  handleButton = () => {
    this.setState({button: false})
  }

  render() {
    return (
      <>
      {this.state.button ? <Button onClick = {this.handleButton}>Login</Button> : <LoginForm loginHandler = {this.props.loginHandler}/>}
      </>
    )
  }
}
