import React, { Component } from "react";
import lifesIcon from "assets/images/lifesIcon.png";
import dummy from "assets/images/dummy.png";

export class Right extends Component {
  constructor(props) {
    super(props);
    const {
      firstName,
      lastName,
      dateOfBirth,
      username,
      emailAddress,
      createdAt,
      mobileNumber,
      lives,
      uid
    } = this.props.user;

    this.state = {
      uid: this.props.uid,
      firstname: firstName,
      lastname: lastName,
      username: username,
      Dateofbirth: dateOfBirth,
      email: emailAddress,
      phone_number: mobileNumber,
      join_date: new Date(createdAt).toDateString(),
      Lives: lives,
      played: 0,
      won: 0,
      played_lives: 0,
      played_history: this.props.playing,
      purchase_history: this.props.history
    };
  }

  convertDate= (time) => {
      return new Date(time).toDateString();
  }

  render() {
    return (
      <div id="wrapper">
        <div class="normalheader ">
          <div class="hpanel">
            <div class="panel-body">
              <a class="small-header-action" href="">
                <div class="clip-header">
                  <i class="fa fa-arrow-up" />
                </div>
              </a>

              <h2 class="font-light m-b-xs">Profile</h2>
            </div>
          </div>
        </div>

        <div class="content">
          <div class="row">
            <div class="col-lg-4">
              <div class="hpanel hgreen">
                <div class="panel-body">
                  <div class="pull-right text-right" />
                  <img
                    alt="logo"
                    class="img-circle m-b m-t-md"
                    src={this.props.user.profile_url || dummy}
                  />
                  <h3 style={{ marginBottom: 15 + "px" }}>
                   
                      {this.state.firstname} {this.state.lastname} ({this.state.uid})
                    
                  </h3>

                  <div class="table-responsive">
                    <table class="table table-striped">
                      <tbody>
                        <tr>
                          <td>
                            <b>First name</b>
                          </td>
                          <td>{this.state.firstname}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Last name</b>
                          </td>
                          <td>{this.state.lastname}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Username</b>
                          </td>
                          <td>{this.state.username}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Date of birth</b>
                          </td>
                          <td>{this.state.Dateofbirth}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Contact email</b>
                          </td>
                          <td>{this.state.email}</td>
                        </tr>

                        <tr>
                          <td>
                            <b>Contact phone number</b>
                          </td>
                          <td>{this.state.phone_number}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Join date</b>
                          </td>
                          <td>{this.state.join_date}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Lives in account</b>
                          </td>
                          <td>
                            {this.state.Lives}
                            <img
                              src={lifesIcon}
                              style={{
                                width: 20 + "px",
                                marginLeft: 4 + "px",
                                position: "relative",
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="panel-footer contact-footer">
                  <div class="row">
                    <div class="col-md-4 border-right">
                      <div class="contact-stat">
                        <span>Played </span>{" "}
                        <strong>{this.state.played}</strong>
                      </div>
                    </div>
                    <div class="col-md-4 border-right">
                      <div class="contact-stat">
                        <span>Won </span> <strong>{this.state.won}</strong>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="contact-stat">
                        <span>Lives </span>{" "}
                        <strong>{this.state.played_lives}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="hpanel">
                <div class="hpanel">
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a data-toggle="tab" href="#tab-1">
                        Games played
                      </a>
                    </li>
                    <li class="">
                      <a data-toggle="tab" href="#tab-2">
                        Purchase history
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div id="tab-1" class="tab-pane active">
                      <div class="panel-body">
                        <div class="row projects">
                            {this.state.played_history.map((one, index) => {
                            return (
                             <div class="col-lg-12" key={index}>
                              <div class="hpanel hgreen">
                                <div class="panel-body">
                                  <div class="row">
                                    <div class="col-sm-12">
                                      <h4>
                                        <a href="">{one.startTime}</a>
                                      </h4>

                                      <div class="row">
                                        <div class="col-sm-3">
                                          <div class="project-label">Game</div>
                                          <p>{one.gid}</p>
                                        </div>
                                        <div class="col-sm-3">
                                          <div class="project-label">Score</div>
                                          <p>{one.userScore}</p>
                                        </div>
                                        <div class="col-sm-3">
                                          <div class="project-label">
                                            Lives assigned
                                          </div>
                                          <p>
                                            {one.staticUserLivesAssigned}{" "}
                                            <img
                                              src={lifesIcon}
                                              style={{
                                                width: 18 + "px",
                                                marginLeft: 4 + "px",
                                                position: "relative",
                                              }}
                                            />
                                          </p>
                                        </div>
                                        <div class="col-sm-3">
                                          <div class="project-label">
                                            Position
                                          </div>
                                          <p>{one.position}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="panel-footer">-</div>
                              </div>
                            </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div id="tab-2" class="tab-pane">
                      <div class="panel-body no-padding">
                        <div class="chat-discussion" style={{ height: "auto" }}>
                          <div class="table-responsive">
                            <table class="table table-hover table-bordered table-striped">
                              <tbody>
                                {this.state.purchase_history.map((item, indx) => {
                                  return (
                                    <tr key={indx}>
                                      <td>
                                        <span
                                          class="label label-success"
                                          style={{ backgroundColor: "green" }}
                                        >
                                          Success
                                        </span>
                                      </td>
                                      <td class="issue-info">
                                        <a href="#">Lives purchase</a>
                                        <br />
                                        <small>{item.lifes} lives bought</small>
                                      </td>
                                      <td>{item.price}.00GBP</td>
                                      <td>{this.convertDate(item.date)}</td>
                                      <td class="text-right">
                                        <button class="btn btn-default btn-md">
                                          {" "}
                                          View receipt
                                        </button>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Right;
