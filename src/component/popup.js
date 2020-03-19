import React, { Component } from "react";
import "../index.css";

import Intro from "./introduction";
import Work from "./work";
import About from "./about";
import Contact from "./contact";
// import ErrorPage from "./ErrorPage";

class Popup extends Component {
  avaliableComponents = {
    Intro,
    Work,
    About,
    Contact,
  };

  render() {
    const RenderComponent = this.avaliableComponents[this.props.component]
    return (
      <div className="popup">
        <div className="popup_inner">
          <RenderComponent />
          <button onClick={this.props.closePopup}>CLOSE</button>
        </div>
      </div>
    );
  }
}

export default Popup;
