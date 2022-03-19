import React, { Component } from "react";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  render() {
    return (
      <div className="App">
        <div className="input-form">
          <form action="" method="post">
      <input type="text" value="username" />
      <input type="password" value="username" />
      </form>
        </div>
      </div>
    );
  }
}
