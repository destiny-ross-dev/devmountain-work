import React, { Component } from "react";
import "./Header.css";
import houserLogo from "../../assets/houser_logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Header">
        <div className="ContentContainer ContentContainer--Header">
          <img className="Logo" src={houserLogo} />
          <h1 className="WebsiteName">Houser</h1>
        </div>
      </div>
    );
  }
}

export default Header;
