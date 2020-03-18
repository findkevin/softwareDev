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
    let propsComponent = this.props.component;
    console.log('propsComponent outside MAP:', propsComponent)
    const renderComponent = () =>
      Object.keys(this.avaliableComponents).map(function(key, index) {
        let component = "";
        //return the component that matches the key.
        if (key === propsComponent) {
          component = <Intro />;
        } else if (key === propsComponent) {
          component = <Work />;
        } else if (key === propsComponent) {
          component = <About />;
        } else if (key === propsComponent) {
          component = <Contact />;
        }
        console.log('--------------------Inside MAP----------------------')
        console.log("key in map:", key);
        console.log("idx in map:", index);
        console.log("this.props.comp:", propsComponent);
        console.log('if key = propsComp', key === propsComponent)
        console.log('component:', component)
        console.log('--------------------Before Return------------------')
        return component;
      });

    return (
      <div className="popup">
        <div className="popup_inner">
          {renderComponent()}
          <button onClick={this.props.closePopup}>CLOSE</button>
        </div>
      </div>
    );
  }
}

export default Popup;
