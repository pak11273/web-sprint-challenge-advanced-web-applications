import "./styles.scss";

import { Route, BrowserRouter as Router } from "react-router-dom";

import Login from "./components/Login";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
