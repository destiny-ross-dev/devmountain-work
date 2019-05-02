import React, { Component } from "react";
import logo from "../../assets/helo_logo.png";
import axios from "axios";
import { connect } from "react-redux";
import { registerUser, loginUser } from "../../ducks/reducer";
import { withRouter } from "react-router-dom";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { showPass: false, username: "", password: "" };
  }
  componentDidMount() {
    this.props.user.userid
      ? console.log("redirecting...")
      : console.log("login or register");
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleRegister = e => {
    let { username, password } = this.state;
    this.props
      .registerUser(username, password)
      .then(() => this.props.history.push("/dashboard"));
  };
  handleLogin = e => {
    let { username, password } = this.state;
    this.props
      .loginUser(username, password)
      .then(() => this.props.history.push("/dashboard"));
  };

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
          <input
            onChange={this.handleChange}
            value={this.state.username}
            name="username"
            type="text"
          />
        </div>
        <div className="authentication__input-box">
          <p>Password</p>
          <input
            type={showPass ? "text" : "password"}
            onChange={this.handleChange}
            value={this.state.password}
            name="password"
          />
        </div>

        <div className="authentication__button-container">
          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleRegister}>Register</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { registerUser, loginUser }
  )(Auth)
);
