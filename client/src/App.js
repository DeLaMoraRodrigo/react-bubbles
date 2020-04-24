import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to="/">
            <h3>HOME</h3>
          </NavLink>
          <NavLink to="/login">
            <h3>LOG IN</h3>
          </NavLink>
          <NavLink to="/bubble-page">
            <h3>BUBBLE PAGE</h3>
          </NavLink>
        </nav>

        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/bubble-page" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
