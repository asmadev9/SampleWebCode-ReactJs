import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import routes from "routes.js";
import Login from '../views/Login'
import {Redirect} from "react-router";


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getRoutes = routes => {
    const token = localStorage.getItem('admin')
    if (!token) {
      return <Redirect to={'/admin/login'}/>
    }
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
                handleClick={this.handleNotificationClick}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({fixedClasses: "dropdown show-dropdown open"});
    } else {
      this.setState({fixedClasses: "dropdown"});
    }
  };

  componentDidMount() {
    this.setState({_notificationSystem: this.refs.notificationSystem});
    var _notificationSystem = this.refs.notificationSystem;
    var color = Math.floor(Math.random() * 4 + 1);
    var level;
    switch (color) {
      case 1:
        level = "success";
        break;
      case 2:
        level = "warning";
        break;
      case 3:
        level = "error";
        break;
      case 4:
        level = "info";
        break;
      default:
        break;
    }
  }

  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    /*if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }*/
  }

  render() {
    return (
      <Switch>
        <Route path={'/admin/login'} component={Login}/>
        {this.getRoutes(routes)}
        <Route render={() => <Login/>}/>
      </Switch>
    );
  }
}


export default Admin;
