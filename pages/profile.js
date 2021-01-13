import React from "react";
import Layout from "../components/Layout";
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
    return (
      <Layout title="profile">
        <pre>{JSON.stringify(this.state.user, null, 2)}</pre>
      </Layout>
    );
  }
}

export default Profile;
