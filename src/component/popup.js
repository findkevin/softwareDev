import React, {Component} from "react";
import "../index.css";

import Intro from "./introduction";
import Work from "./work";
import About from "./about";
import Contact from "./contact";
import ErrorPage from "./error_page";

class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <div className="popup\_inner">
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>CLOSE</button>
        </div>
      </div>
    );
  }
}

export default Popup;
