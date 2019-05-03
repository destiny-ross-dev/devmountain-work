import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleLogout = () => {
    this.props.logout().then(response => this.props.push("/"));
  };
  render() {
    return (
      <div className="navigation">
        <div className="navigation__profile-img-div">
          <img
            src={`https://robohash.org/${this.props.user.username ||
              "placeholder"}.png`}
          />
          <h3>{this.props.user.username}</h3>
        </div>
        <div className="navigation__page-options">
          <Link to="/dashboard" className="link">
            <i className="fal fa-home" />
          </Link>
          <Link to="/new" className="link">
            <i className="fal fa-file-signature" />
          </Link>
        </div>
        <div onClick={this.handleLogout} className="navigation__logout">
          <i className="fal fa-power-off" />
        </div>
      </div>
    );
  }
}

export default Nav;
