import React, { Component } from "react";
import "../index.css";

import Intro from "./Introduction";
import Work from "./work";
import About from "./About";
import Contact from "./Contact";
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
