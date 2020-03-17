import React, {Component} from "react";
import "../index.css";

import Intro from "./introduction";
import Work from "./work";
import About from "./about";
import Contact from "./contact";
// import ErrorPage from "./error_page";

class Popup extends Component {
  selectedComponent = {
    Intro : Intro,
    Work : Work,
    About : About,
    Contact : Contact,
  }
  render() {
    return (
      <div className="popup">
        <div className="popup\_inner">
          {/* <h1>{this.props.component}</h1> */}
          {Object.keys(this.selectedComponent).map(function(key, index){
            //return the component that matches the key.
          return <Intro/>;
          })}
          <button onClick={this.props.closePopup}>CLOSE</button>
        </div>
      </div>
    );
  }
}

export default Popup;
