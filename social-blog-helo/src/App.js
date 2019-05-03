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
import { connect } from "react-redux";
import { logoutUser } from "./ducks/reducer";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="application">
        {this.props.location.pathname !== "/" && (
          <Nav
            user={this.props.user}
            logout={this.props.logoutUser}
            push={this.props.history.push}
          />
        )}
        {routes}
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
    { logoutUser }
  )(App)
);
