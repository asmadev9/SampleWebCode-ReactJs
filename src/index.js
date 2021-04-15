import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/fontawesome/css/font-awesome.css";
import "assets/metisMenu/dist/metisMenu.css"; 
import "assets/animate.css/animate.css"; 
import "assets/bootstrap/dist/css/bootstrap.css"; 
import "assets/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css"; 
import "assets/fonts/pe-icon-7-stroke/css/helper.css"; 
import "assets/styles/style.css"; 

import AdminLayout from "layouts/Admin.jsx";



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={props => <AdminLayout {...props} />}  />
      <Redirect from="/" to="/admin/shop" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")


);