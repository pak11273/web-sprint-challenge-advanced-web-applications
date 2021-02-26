import { Redirect, Route } from "react-router-dom";

import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const PrivateRoute = () => {
  const [token] = useLocalStorage();

  return (
    <Route exact path="/private">
      {token ? <Redirect to="/bubble" /> : <Redirect to="/" />}
    </Route>
  );
};

//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in
