import React from "react";

import { Switch, Route } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import Post from "./components/Post/Post";
import Form from "./components/Form/Form";
import requireAuth from "./requireAuth";

export default (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <div className="authentication">
          <Auth />
        </div>
      )}
    />
    <Route path="/dashboard" component={requireAuth(Dashboard)} />
    <Route path="/post/:postid" component={requireAuth(Post)} />
    <Route path="/new" component={requireAuth(Form)} />
  </Switch>
);
