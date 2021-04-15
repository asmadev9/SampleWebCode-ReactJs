import React, { Component } from "react";
import dummyImage from "../../assets/images/dummy.png";
import { Modal } from "react-bootstrap";
import firebase, { firestore } from "../../firebase";
import { Link } from "react-router-dom";

export class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      value: 1,
      datetime: null,
      firebaseLoading: false,
      email: "",
      password: ""
    };
  }

  onSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(userDoc => {
        let userId = userDoc.user.uid;
        firestore
          .collection("admins")
          .doc(userId)
          .get()
          .then(userDoc => {
            if (userDoc.exists) {
              console.log("Navigate to Main Panel");
              localStorage.setItem('admin',userId)
              this.props.history.push('/admin/games')
            } else {
              firebase
                .auth()
                .signOut()
                .then(() => {
                  alert("Invalid Email or Password");
                });
            }
          });
      })
      .catch(err => {
        console.log(err.code);
        switch (err.code) {
          case "auth/invalid-email":
            alert(err.message);
            break;
          case "auth/wrong-password":
            alert(err.message);
            break;
          case "auth/user-not-found":
            alert(err.message);
            break;
          default:
            alert(err.message);
            break;
        }
      });
  };

  render() {
    return (
      <div className="login-container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center m-b-md">
              <h3>PLEASE LOGIN</h3>
            </div>
            <div className="hpanel">
              <div
                className="panel-body"
                style={{ backgroundColor: "#E7E7E7" }}
              >
                {/* <form> */}
                <div className="form-group">
                  <label className="control-label" htmlFor="username">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    title="Please enter your email"
                    required
                    name="username"
                    value={this.state.email}
                    onChange={({ target }) =>
                      this.setState({ email: target.value })
                    }
                    id="username"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    title="Please enter your password"
                    placeholder="********"
                    required
                    onChange={({ target }) =>
                      this.setState({ password: target.value })
                    }
                    value={this.state.password}
                    name="password"
                    id="password"
                    className="form-control"
                  />
                </div>

                <button
                  onClick={this.onSubmit}
                  className="btn btn-success btn-block"
                >
                  Login
                </button>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Right;
