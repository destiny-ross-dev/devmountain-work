import React from "react";

import { Switch, Route } from "react-router-dom";

import Auth from "./components/Auth/Auth";

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
  </Switch>
);
