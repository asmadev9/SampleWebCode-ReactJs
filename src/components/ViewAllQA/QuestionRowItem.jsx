import React, { Component } from "react";

export default class QuestionRowItem extends Component {
 
  render() {

    return (
      <tr>
        <td>ID</td>
        <td>Question</td>
        <td>Correct answer</td>
        <td>Incorrect #1</td>
        <td>Incorrect #2</td>
        <td>Incorrect #3</td>
      </tr>
    );
  }
}
