import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter as Link, Route, Switch } from "react-router-dom";

import Home from "./component/Home";
// import Intro from "./component/introduction";
// import Work from "./component/work";
// import About from "./component/about";
// import Contact from "./component/contact";
// import ErrorPage from "./component/error_page";
import Popup from "./component/Popup";

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

            {this.state.showPopup ? (
              <Popup
                //I want to render my components here after each button has been clicked.
                // component={e => this.togglePopup(e)}
                component={this.state.component}
                closePopup={e => this.togglePopup(e)}
              />
            ) : null}

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
