import React, { Component } from "react";
import dummyImage from "../../assets/images/dummy.png";
import { Modal } from "react-bootstrap";
import { firestore } from "../../firebase";
import {Link} from "react-router-dom";

export class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      value: 1,
      datetime: null,
      firebaseLoading: false
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  onSubmit = () => {
    if (this.state.datetime === null) {
      return alert("Please enter valid date / time");
    }
    this.setState({firebaseLoading: true})
    firestore
      .collection("schedule_games")
      .add({
        gameType: parseInt(this.state.value),
        startTime: this.state.datetime,
        livesAssigned: 0
      })
      .then(() => {
        alert("Game Successfully Scheduled");
      })
      .catch(err => {
        this.setState({ firebaseLoading: false });
        console.log(err);
      });
  };

  render() {
    return (
      <div id="wrapper">
        <div className="content">

          <Link to={`/admin/games`}>
            <button
              type="button"
              className="btn btn-success"
              style={{ marginBottom: "25px" }}
            >
              Back to all games
            </button>
          </Link>

          <div className="row">
            <div className="form-group">
              <label className="col-sm-2 control-label">Game type</label>
              <div className="col-sm-10">
                <select
                  className="form-control m-b"
                  name="gameType"
                  value={this.state.value}
                  onChange={({ target }) =>
                    this.setState({ value: target.value })
                  }
                >
                  <option value={1}>Q&A</option>
                  <option value={2}>Guess The Sound</option>
                  <option value={3}>Blocks</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="col-sm-2 control-label">Date / time</label>
              <div className="col-sm-10">
                <div className="input-group date" id="datetimepicker1">
                  <span className="input-group-addon">
                    <span className="fa fa-calendar" />
                  </span>
                  <input
                    type="datetime-local"
                    id="addClassDate"
                    name="date"
                    className="form-control"
                    onChange={({ target }) =>
                      this.setState({
                        datetime: new Date(target.value).getTime()
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            disabled={this.state.firebaseLoading}
            type="button"
            onClick={this.onSubmit}
            className="btn btn-primary"
            style={{ marginTop: "30px" }}
          >
            {this.state.firebaseLoading ? "Scheduling Game..." : "Add Game"}
          </button>
        </div>

      </div>
    );
  }
}

export default Right;
