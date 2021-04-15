import React, { Component } from "react";

export default class NotificationRowItem extends Component {
 
  render() {

    return (
      <tr>
        <td>{this.props.notification.recipients}</td>
        <td>{this.props.notification.title}</td>
        <td>{this.props.notification.description}</td>
      </tr>
    );
  }
}
