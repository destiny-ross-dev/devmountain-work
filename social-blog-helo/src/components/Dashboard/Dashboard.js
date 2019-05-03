import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <div className="page-container page-container--dashboard">Dashboard</div>
    );
  }
}

export default Dashboard;
