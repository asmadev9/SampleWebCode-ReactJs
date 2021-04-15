import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from "components/structure/Header";
import Splash from "components/structure/Splash";
import Left from "components/structure/Left";
import Right from "components/Login/Right";
import $ from "jquery";
import firebase, {firestore} from "../firebase";
import {Redirect,withRouter} from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.checkAlreadyLogin()
  }

  checkAlreadyLogin = () => {
    if (localStorage.getItem('admin')) {
      this.props.history.push('/admin/games')
    }
  }


  render() {
    return <Right history={this.props.history}/>;
  }
}

export default withRouter(Login);
