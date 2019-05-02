import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

export default function requireAuth(Component) {
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuth();
    }
    checkAuth() {
      if (!this.props.user.user_id) {
        this.props.history.push(`/`);
      }
    }

    render() {
      console.log(this.props);
      return this.props.user.user_id ? <Component {...this.props} /> : null;
    }
  }
  const mapStateToProps = state => {
    return {
      user: state.user
    };
  };

  return withRouter(
    connect(
      mapStateToProps,
      {}
    )(AuthenticatedComponent)
  );
}
