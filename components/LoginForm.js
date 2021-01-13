import React from "react";
import { loginUser } from "../lib/auth";
import Router from "next/router";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "Rey.Padberg@karina.biz",
      password: "ambrose.net",
      error: "",
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    const { email, password } = this.state;
    evt.preventDefault();
    this.setState({ error: "", isLoading: true });
    loginUser(email, password)
      .then(() => {
        Router.push("/profile");
      })
      .catch(this.showError);
  }

  showError = (err) => {
    console.log(err);
    const error = (err.response && err.response.data) || err.message;
    this.setState({ error, isLoading: false });
  };

  render() {
    const { email, password, error, isLoading } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
          ></input>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
          ></input>
        </div>
        <button disabled={isLoading} type="submit">
          {isLoading ? "Sending" : "Submit"}
        </button>
        {error && <div>{error}</div>}
      </form>
    );
  }
}

export default LoginForm;
