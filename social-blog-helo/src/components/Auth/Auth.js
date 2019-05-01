import React, { Component } from "react";
import logo from "../../assets/helo_logo.png";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { showPass: false };
  }
  render() {
    let { showPass } = this.state;
    return (
      <div className="authentication__container">
        <img
          src={logo}
          alt="Helo's logo"
          className="authentication__logo-img"
        />
        <h1 className="authentication__logo-text">Helo</h1>
        <div className="authentication__input-box">
          <p>Username</p>
          <input />
        </div>
        <div className="authentication__input-box">
          <p>Password</p>
          <input type={showPass ? "text" : "password"} />
        </div>

        <div className="authentication__button-container">
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    );
  }
}

export default Auth;
