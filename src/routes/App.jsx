import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "@routes/PrivateRoute";
import PublicRoute from "@routes/PublicRoute";
// Containers
import Layout from "@containers/Layout";
// Pages
import Login from "@pages/Login";
import Home from "@pages/Home";
// Context
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PublicRoute path="/login" component={Login} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
