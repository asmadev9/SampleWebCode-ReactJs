import React, {Component} from "react";
import {withRouter} from "react-router";

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="header">
        <div className="color-line">
        </div>
        <div id="logo" className="light-version">
              <span>
                  {this.props.logo_name}
              </span>
        </div>
        <nav role="navigation">
          <div className="header-link hide-menu"><i className="fa fa-bars"></i></div>
          <div className="small-logo">
            <span className="text-primary">HOMER APP</span>
          </div>
          <div className="mobile-menu">
            <button type="button" className="navbar-toggle mobile-menu-toggle" data-toggle="collapse"
                    data-target="#mobile-collapse">
              <i className="fa fa-chevron-down"></i>
            </button>
            <div className="collapse mobile-navbar" id="mobile-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <a className="" href="login.html">Login</a>
                </li>
                <li>
                  <a className="" href="login.html">Logout</a>
                </li>
                <li>
                  <a className="" href="profile.html">Profile</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-right">
            <ul className="nav navbar-nav no-borders">

              <li className="dropdown">
                <a onClick={() => {
                  localStorage.setItem('admin','')
                  this.props.history.push('/admin/login')
                }}>
                  <i className="pe-7s-upload pe-rotate-90"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}


export default withRouter(Header);
