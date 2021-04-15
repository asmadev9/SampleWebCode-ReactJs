import React, { Component } from "react";
import {Link} from "react-router-dom";
import $ from 'jquery';

import lws_icon from 'assets/images/lws-icon.png';
export class Left extends Component {
     constructor(props){
            super(props);
            this.state={
                selected_image:'',
                cart_list:{}   
            }
           this.thumbnail_click =  this.thumbnail_click.bind(this);
    };
    thumbnail_click = function(event){

        this.setState({selected_image:event.target.src});
    };
  render() {
    return (
      <aside id="menu">
          <div id="navigation">
              <div className="profile-picture">
                  <a href="#">
                      <img src={lws_icon} className="img-circle m-b" alt="logo" />
                  </a>

                  <div className="stats-label text-color">
                      <span className="font-extra-bold font-uppercase">Last Won Standing</span>

                  
                  </div>
              </div>

              <ul className="nav" id="side-menu">

                  <li>
                      <Link to={`/admin/games`}><span className="nav-label">Manage games</span></Link>
                  </li>


                  <li>
                      <Link to={`/admin/users`}><span className="nav-label">View all users</span></Link>
                  </li>

                  {/*


                  <li>
                      <a href="users"> <span className="nav-label">Dashboard</span></a>
                  </li>
                

                  <li>
                      <a href="#"><span className="nav-label">Question Management</span><span className="fa arrow"></span> </a>
                      <ul className="nav nav-second-level">
                          <li><a href="panels.html">Q&A</a></li>
                          <li><a href="typography.html">Guess the sound</a></li>
                      </ul>
                  </li>*/}
                
                  <li>
                       <Link to={`#`}><span className="nav-label">Notifications</span><span className="fa arrow"></span></Link>
                      <ul className="nav nav-second-level">
                          <li>
                             <Link to={`/admin/send-notification`}>Send notification</Link>
                          </li>
                          <li>
                            <Link to={`/admin/notifications`}>Notification history</Link>
                          </li>
                      </ul>
                  </li>


              </ul>
          </div>
      </aside>
    );
  }
}


export default Left;
