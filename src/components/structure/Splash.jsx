import React, { Component } from "react";

export class Splash extends Component {
  render() {
    return (
        <div className="splash">
            <div className="color-line"></div>
            <div className="splash-title">
                <h1>Homer - Responsive Admin Theme</h1>
                <p>Special Admin Theme for small and medium webapp with very clean and aesthetic style and feel. </p>
                <div className="spinner">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                </div>
            </div>
        </div>

    );
  }
}


export default Splash;
