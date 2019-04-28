import React, { Component } from "react";
import "./Header.css";
import houserLogo from "../../assets/houser_logo.png";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Header">
        <Link to="/" className="ContentContainer ContentContainer--Header">
          <img className="Logo" src={houserLogo} />
          <h1 className="WebsiteName">Houser</h1>
        </Link>
      </div>
    );
  }
}

export default Header;
