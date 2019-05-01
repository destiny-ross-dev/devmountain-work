import React, { Component } from "react";
import logo from "./logo.svg";
import "./scss/main.scss";
import Nav from "./components/Nav/Nav";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Post from "./components/Post/Post";
import { withRouter } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        {this.props.match.path !== "/" && <Nav />}
        {routes}
        {/* <Dashboard />
        <Form />
        <Post /> */}
      </div>
    );
  }
}

export default withRouter(App);
