import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./app/layouts/Layout";
import Main from "./app/pages/Main";
import Users from "./app/pages/Users";
import Posts from "./app/pages/Posts";
import Comments from "./app/pages/Comments";
import PageNotFound from "./app/pages/PageNotFound";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main} />
      <Route path="posts" component={Posts} />
      <Route path="comments" component={Comments} />
      <Route path="users" component={Users} />
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>,
  document.querySelector("#root")
);

/* {  <Layout>
    <Main />
  </Layout>} */
