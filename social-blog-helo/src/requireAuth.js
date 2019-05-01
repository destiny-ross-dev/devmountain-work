import React from "react";
import { withRouter } from "react-router-dom";

export default function requireAuth(Component) {
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuth();
    }
    checkAuth() {
      if (!this.props.user) {
        this.props.history.push(`/`);
      }
    }

    render() {
      console.log(this.props);
      return <Component {...this.props} />;
    }
  }

  return withRouter(AuthenticatedComponent);
}
