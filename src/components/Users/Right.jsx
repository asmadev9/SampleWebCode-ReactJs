import React, { Component } from "react";
import {Link} from "react-router-dom";
import { firestore } from '../../firebase'
import dummyImage from '../../assets/images/dummy.png'
export class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      value: "",
      loadingUsers: true
    };
    this.arrayholder = [];
  }
  componentDidMount() {
    firestore
      .collection("users")
      .get()
      .then(querySnapshot => {
        let temp = [];
        querySnapshot.forEach(doc => {
          temp.push({ ...{ uid: doc.id }, ...doc.data() });
        });
        this.setState({ users: temp });
        this.arrayholder = temp;    
        this.setState({ loadingUsers: false });    
      });
  }

  convertDate = (time) => {
      return new Date(time).toDateString();
  }

  searchFilterFunction = text => {
    this.setState({
      value: text
    });
    console.log(text)
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.username.toUpperCase()} ${item.firstName.toUpperCase()} ${item.lastName.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      users: newData,
    });
  };

  render() {
    return (
      <div id="wrapper">
        <div className="normalheader ">
          <div className="hpanel">
            <div className="panel-body">
              <a className="small-header-action" href="">
                <div className="clip-header">
                  <i className="fa fa-arrow-up" />
                </div>
              </a>
              <h2 className="font-light m-b-xs">
                All users{" "}
                {this.props.users && "(" + this.props.users.length + ")"}
              </h2>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-lg-12">
              <div className="hpanel">
                <div className="panel-body">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.value}
                      placeholder="Search users.."
                      onChange={(event)=>this.searchFilterFunction(event.target.value)}
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-default">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">

            {this.state.loadingUsers &&
              <h3 style={{textAlign: 'center'}}>Loading...</h3>
            }


            {this.state.users &&
              this.state.users.map(user => {
                return (
                  <div className="col-lg-3">
                    <div className="hpanel hgreen contact-panel">
                      <div className="panel-body">
                        <img
                          alt="logo"
                          className="img-circle m-b"
                          src={user.profile_url || dummyImage}
                        />
                        <h3>
                          <Link to={`/admin/user/${user.uid}`}>{user.firstName+' '+user.lastName}</Link>
                        </h3>
                        <div className="text-muted font-bold m-b-xs">
                          {user.username}
                        </div>
                        <p>Joined: {this.convertDate(user.createdAt)}</p>
                      </div>
                      <div className="panel-footer contact-footer">
                        <div className="row">
                          <div className="col-md-4 border-right">
                            <div className="contact-stat">
                              <span>Played </span>{" "}
                              <strong>{0}</strong>
                            </div>
                          </div>
                          <div className="col-md-4 border-right">
                            <div className="contact-stat">
                              <span>Won </span> <strong>{0}</strong>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="contact-stat">
                              <span>Lives </span> <strong>{0}</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div id="right-sidebar" className="animated fadeInRight">
          <div className="p-m">
            <button
              id="sidebar-close"
              className="right-sidebar-toggle sidebar-button btn btn-default m-b-md"
            >
              <i className="pe pe-7s-close" />
            </button>
            <div>
              <span className="font-bold no-margins"> Analytics </span>
              <br />
              <small>
                {" "}
                Lorem Ipsum is simply dummy text of the printing simply all
                dummy text.
              </small>
            </div>
            <div className="row m-t-sm m-b-sm">
              <div className="col-lg-6">
                <h3 className="no-margins font-extra-bold text-success">
                  300,102
                </h3>

                <div className="font-bold">
                  98% <i className="fa fa-level-up text-success" />
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="no-margins font-extra-bold text-success">
                  280,200
                </h3>

                <div className="font-bold">
                  98% <i className="fa fa-level-up text-success" />
                </div>
              </div>
            </div>
            <div className="progress m-t-xs full progress-small">
              <div
                style={{ width: 25 + "%" }}
                aria-valuemax="100"
                aria-valuemin="0"
                aria-valuenow="25"
                role="progressbar"
                className=" progress-bar progress-bar-success"
              >
                <span className="sr-only">35% Complete (success)</span>
              </div>
            </div>
          </div>
          <div className="p-m bg-light border-bottom border-top">
            <span className="font-bold no-margins"> Social talks </span>
            <br />
            <small>
              {" "}
              Lorem Ipsum is simply dummy text of the printing simply all dummy
              text.
            </small>
            <div className="m-t-md">
              <div className="social-talk">
                <div className="media social-profile clearfix">
                  <a className="pull-left">
                    <img src="images/a1.jpg" alt="profile-picture" />
                  </a>

                  <div className="media-body">
                    <span className="font-bold">John Novak</span>
                    <small className="text-muted">21.03.2015</small>
                    <div className="social-content small">
                      Injected humour, or randomised words which don't look even
                      slightly believable.
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-talk">
                <div className="media social-profile clearfix">
                  <a className="pull-left">
                    <img src="images/a3.jpg" alt="profile-picture" />
                  </a>

                  <div className="media-body">
                    <span className="font-bold">Mark Smith</span>
                    <small className="text-muted">14.04.2015</small>
                    <div className="social-content">
                      Many desktop publishing packages and web page editors.
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-talk">
                <div className="media social-profile clearfix">
                  <a className="pull-left">
                    <img src="images/a4.jpg" alt="profile-picture" />
                  </a>

                  <div className="media-body">
                    <span className="font-bold">Marica Morgan</span>
                    <small className="text-muted">21.03.2015</small>

                    <div className="social-content">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-m">
            <span className="font-bold no-margins"> Sales in last week </span>
            <div className="m-t-xs">
              <div className="row">
                <div className="col-xs-6">
                  <small>Today</small>
                  <h4 className="m-t-xs">
                    $170,20 <i className="fa fa-level-up text-success" />
                  </h4>
                </div>
                <div className="col-xs-6">
                  <small>Last week</small>
                  <h4 className="m-t-xs">
                    $580,90 <i className="fa fa-level-up text-success" />
                  </h4>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6">
                  <small>Today</small>
                  <h4 className="m-t-xs">
                    $620,20 <i className="fa fa-level-up text-success" />
                  </h4>
                </div>
                <div className="col-xs-6">
                  <small>Last week</small>
                  <h4 className="m-t-xs">
                    $140,70 <i className="fa fa-level-up text-success" />
                  </h4>
                </div>
              </div>
            </div>
            <small>
              {" "}
              Lorem Ipsum is simply dummy text of the printing simply all dummy
              text. Many desktop publishing packages and web page editors.
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default Right;
