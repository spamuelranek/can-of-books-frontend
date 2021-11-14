import { Component } from "react";
import {withAuth0} from '@auth0/auth0-react';

class Profile extends Component {

  render() {
        /* STRETCH TODO: if no logged in user then redirect home */
    return (
      <>
      {this.props.user ?
      <div>
        <p>{this.props.auth0.user.name}</p>
        <p>{this.props.auth0.user.email}</p>
      </div>
      :false}
      </>
    )    
  }
};

export default withAuth0(Profile);
