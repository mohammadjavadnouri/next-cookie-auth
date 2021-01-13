import React from "react";
import { loginUser } from "../lib/auth";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "Rey.Padberg@karina.biz",
      password: "ambrose.net",
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
    loginUser(email, password);
  }

  render() {
    const { email, password } = this.state;
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
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default LoginForm;
