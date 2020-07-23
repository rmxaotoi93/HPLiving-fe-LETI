import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...props }) {
  const user = useSelector((state) => state.user);
  const loaded = useSelector((state) => state.app.loaded);
  if (!loaded) return <div>...Loading</div>;
  return user.isAuthenticated ? (
    <Route {...props} render={() => <Component {...props} />} />
  ) : (
    <Redirect to="/login" />
  );
}
