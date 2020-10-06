import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function Routing() {
  return (
    <div className="routing">
      <Router>
          <Switch>
            <Route path="/">
              <div />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}
