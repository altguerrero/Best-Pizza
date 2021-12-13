import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "@hooks/useAuth";

export default function PublicRoute({ component: Component, ...rest }) {
  const user = Auth();

  return (
    <Route {...rest}>{!user.id ? <Component /> : <Redirect to="/" />}</Route>
  );
}
