import React, { Component } from "react";

import "./App.css";
import Header from "./Components/Header/Header";

import routes from "./routes";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="App">
        <Header />
        {/* <Dashboard />
      <Wizard /> */}
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
