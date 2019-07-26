import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./src/components/Dashboard/Dashboard.component";
import Wizard from "./src/components/Wizard/Wizard.component";
import House_edit from "./src/components/House_Edit/House.component";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/Wizard" component={Wizard} />
    <Route pth="/house/:id" component={House_edit} />
  </Switch>
);
