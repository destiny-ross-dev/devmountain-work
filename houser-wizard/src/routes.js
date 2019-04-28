import React from "react";

import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Wizard from "./Components/Wizard/index.js";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/wizard/:step_number" component={Wizard} />
  </Switch>
);
