import React, { Component } from "react";
import "./Header.css";
import shelfieLogo from "../../assets/shelfie_icon.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Header">
        <img src={shelfieLogo} className="Logo" />
        <h1 className="">Shelfie</h1>
      </div>
    );
  }
}

export default Header;
