import { BrowserRouter, Link } from "react-router-dom";

import { Router } from "./router/Router";
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
      <Router />
    </BrowserRouter>
  );
};
