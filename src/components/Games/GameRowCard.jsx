import React, { Component } from "react";

export default class GameRowCard extends Component {
  convertDate = time => {
    return new Date(time).toDateString();
  };

  convertTime = time => {
    var date = new Date(time);
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    if(hours === '00') hours="12"
    var minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    // time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
    time = hours + ":" + minutes + " " + am_pm;
    return time;
  };

  render() {
    const { startTime, gameType } = this.props.game;
    let game_name = "Q&A";
    if (gameType === 2) game_name = "Guess the sound";
    else if (gameType === 3) game_name = "Blocks";
    return (

      
          <div class="hpanel hgreen">
            <div className="panel-body">
              <div className="row">
                <div className="col-sm-8">
                  <h4>
                    <a href>
                      {this.convertDate(startTime)}, {game_name} Game
                    </a>
                  </h4>
                  <div className="row">
                    <div className="col-sm-2">
                      <div className="project-label">TIME</div>
                      <p>{this.convertTime(startTime)}</p>
                    </div>
                    <div className="col-sm-2">
                      <div className="project-label">GAME</div>
                      <p>{game_name}</p>
                    </div>
                    <div className="col-sm-2">
                      <div className="project-label">PLAYING</div>
                      <p>150</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 project-info">
                  <div className="project-action m-t-md">
                    <div className="btn-group">
                      <button className="btn btn-xs btn-default"> View</button>
                    </div>
                  </div>
                  <div className="project-value">
                    <h2 className="text-success">19 PLAYERS</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel-footer">
                -
            </div>
        </div>
    

    );
  }
}
