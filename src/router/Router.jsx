import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page404 } from "../Page404";
import { AboutRoutes } from "./AboutRoutes";
import { DashboardRoutes } from "./DashboardRoutes";

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
      <Route
        path="/dashboard"
        render={({ match: { url } }) => (
          <Switch>
            {DashboardRoutes.map((route) => (
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
      <Route>
        <Page404 path="*" />
      </Route>
    </Switch>
  );
};
