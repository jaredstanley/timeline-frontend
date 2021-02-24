/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/argon-dashboard-react.css";

// import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import TimelineLayout from "layouts/Timeline/TimelineLayout";
import ProtectedRoute from "components/ProtectedRoute/ProtectedRoute";
import TimelineLayoutPublic from 'layouts/Timeline/TimelineLayoutPublic';
import store from "reduxStore/Store.js"
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/timeline/public/:id" component={TimelineLayoutPublic} />
          <ProtectedRoute path="/timeline" component={TimelineLayout} />
          <ProtectedRoute exact path="/timeline/main" component={TimelineLayout} />
          {/*<Route path="/timeline/main" render={props => <TimelineLayout {...props} />} />*/}
          {/*<Route path="/timeline" render={props => <AdminLayout {...props} />} />*/}
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
          <Redirect from="/" to="/auth" />
        </Switch>
      </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
