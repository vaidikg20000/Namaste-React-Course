import React from "react";
import ProfileFunctional from "./Profile";
class Profile extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <h1>Profile Class Component</h1>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default Profile;
