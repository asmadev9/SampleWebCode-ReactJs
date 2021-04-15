import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "components/structure/Header";
import Splash from "components/structure/Splash";
import Left from "components/structure/Left";
import Right from "components/User/Right";
import $ from "jquery";
import metriMenu from "assets/metisMenu/dist/metisMenu.js";
import { firestore } from "../firebase";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      history: null,
      playing: null
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    firestore
      .collection("users")
      .doc(id)
      .get()
      .then(doc => {
        this.setState({ uid: doc.id });
        this.setState({ user: doc.data() });
      });

    firestore
      .collection("gamesPlaying")
      .get()
      .then(querySnap => {
        let temp = [];
        querySnap.forEach(doc => {
          temp.push({ ...{ hid: doc.id }, ...doc.data() });
        });
        this.setState({ playing: temp });
      });

    firestore
      .collection("users")
      .doc(id)
      .collection("history")
      .get()
      .then(querySnap => {
        let temp = [];
        querySnap.forEach(doc => {
          temp.push({ ...{ hid: doc.id }, ...doc.data() });
        });
        this.setState({ history: temp });
      });
  }
  render() {
    return (
      <div className="fixed-navbar sidebar-scroll">
        <Splash />
        <Header logo_name="LWS Admin" />
        <Left />
        {this.state.user && this.state.history && (
          <Right user={this.state.user} uid={this.state.uid} playing={this.state.playing} history={this.state.history} />
        )}
        <script src={metriMenu} />
      </div>
    );
  }
}

export default Users;
