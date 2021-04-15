import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "components/structure/Header";
import Splash from "components/structure/Splash";
import Left from "components/structure/Left";
import Right from "components/NewGame/Right";
import $ from "jquery";

class NewGame extends Component {
  render() {
    return (
      <div className="fixed-navbar sidebar-scroll">
        <Splash />
        <Header logo_name="LWS Admin" />
        <Left />
        <Right />
      </div>
    );
  }
}

export default NewGame;
