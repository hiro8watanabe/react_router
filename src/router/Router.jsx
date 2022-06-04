import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Dashboard } from "../Dashboard";
import { AboutRoutes } from "./AboutRoutes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/about"
        render={({ match: { url } }) => (
          <Switch>
            {AboutRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};
