import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { About } from "./About";
import { AboutDetailA } from "./AboutDetailA";
import { AboutDetailB } from "./AboutDetailB";
import { Dashboard } from "./Dashboard";
import { Home } from "./Home";
import "./styles.css";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/about"
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={url}>
                <About />
              </Route>
              <Route path={`${url}/detailA`}>
                <AboutDetailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <AboutDetailB />{" "}
              </Route>
            </Switch>
          )}
        ></Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
