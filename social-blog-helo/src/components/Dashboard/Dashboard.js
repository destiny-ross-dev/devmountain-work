import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <div className="page-container page-container--dashboard dashboard">
        <div className="dashboard__search-container">
          <input placeholder="Search By Title" />
          <i class="fas fa-search" />
          <button>Reset</button>
        </div>
      </div>
    );
  }
}

export default Dashboard;
