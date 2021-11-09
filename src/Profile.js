import { Component } from "react";

class Profile extends Component {

  render() {
        /* STRETCH TODO: if no logged in user then redirect home */
    return (
      <>
      {this.props.user ?
      <div>
        <p>{this.props.user.userName}</p>
        <p>{this.props.user.email}</p>
      </div>
      :false}
      </>
    )    
  }
};

export default Profile;
