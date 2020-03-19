import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";

import Home from "./component/home";
import Popup from "./component/popup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      component: null
    };
  }

  togglePopup = event => {
    this.setState({
      showPopup: !this.state.showPopup,
      component: event.target.value
    });
    console.log(event.target.value);
  };

  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <header id="header">
            <div className="logo">
              <div className="logo">
                <img src={logo} className="logo" alt="logo" />
              </div>
            </div>
            <div className="content">
              <div className="inner">
                <Home />
              </div>
            </div>

            {/* Testing Pop up component */}
            <div>
              {this.state.showPopup ? (
                <Popup
                  component={this.state.component}
                  closePopup={e => this.togglePopup(e)}
                />
              ) : null}
            </div>
            {/* End Pop up Component */}

            <nav>
              <button onClick={e => this.togglePopup(e)} value="Intro">
                Intro
              </button>
              <button onClick={e => this.togglePopup(e)} value="Work">
                Work
              </button>
              <button onClick={e => this.togglePopup(e)} value="About">
                About
              </button>
              <button onClick={e => this.togglePopup(e)} value="Contact">
                Contact
              </button>
            </nav>
          </header>
          <footer id="footer">
            <p className="copyright">Powered by React.js</p>
          </footer>
        </div>
      </div>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);

export default App;
