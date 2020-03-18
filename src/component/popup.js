import React, { Component } from "react";
import "../index.css";

import Intro from "./Introduction";
import Work from "./work";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";

class Popup extends Component {
  selectedComponent = {
    Intro: Intro,
    Work: Work,
    About: About,
    Contact: Contact
  };
  render() {
    const renderComponent = () =>
    Object.keys(this.selectedComponent).map(function(key, index) {
      let component = '';
        //return the component that matches the key.
        console.log("key in map", key);
        console.log("idx in map", index);
        if (key === "Intro") {
          component = <Intro />;
        } else if (key === "Work") {
          component = <Work />;
        } else if (key === "About") {
          component = <About />;
        } else if (key === "Contact") {
          component = <Contact />;
        } else {
          component = <ErrorPage />
        }
        return component;
      });

    return (
      <div className="popup">
        <div className="popup_inner">
          { renderComponent() }
          <button onClick={this.props.closePopup}>CLOSE</button>
        </div>
      </div>
    );
  }
}

export default Popup;
