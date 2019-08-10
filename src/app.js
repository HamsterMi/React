import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import { Provider } from "react-redux";
import store from "./app/store";

import Layout from "./app/layouts/Layout";
import Main from "./app/pages/Main";
import Users from "./app/pages/Users";
import User from "./app/pages/User";
import PageNotFound from "./app/pages/PageNotFound";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:userId" component={User} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
