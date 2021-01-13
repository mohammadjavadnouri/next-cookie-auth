import React from "react";
import { getUserProfile } from "../lib/auth";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    getUserProfile().then((user) => this.setState({ user }));
  }

  render() {
    return <pre>{JSON.stringify(this.state.user, null, 2)}</pre>;
  }
}

export default Profile;
