import React, { Component } from "react";
import House from "../House/House";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Dashboard">
        <div className="ContentContainer ContentContainer--Dashboard">
          <div className="Dashboard__Heading">
            <h2>Dashboard</h2>
            <button>Add New Property</button>
          </div>
          <House />
        </div>
      </div>
    );
  }
}

export default Dashboard;
