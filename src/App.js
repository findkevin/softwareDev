import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Link, Route, Switch } from "react-router-dom";

import Home from "./component/home";
import Intro from "./component/introduction";
import Work from "./component/work";
import About from "./component/about";
import Contact from "./component/contact";
import ErrorPage from "./component/error_page";
import Popup from "./component/popup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Simple Popup Example In React Application </h1>
        <button onClick={this.togglePopup.bind(this)}>
          {" "}
          Click To Launch Popup
        </button>

        {this.state.showPopup ? (
          <Popup
            text='Click "Close Button" to hide popup'
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home/>
        <Intro/>
        <Work/>
        <About/>
        <Contact/>
      </header> */}
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
            <nav>
              <ul>
                <li>
                  <a href="/intro">Intro</a>
                </li>
                <li>
                  <a href="/work">Work</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                {/*<li><a href="#elements">Elements</a></li>*/}
              </ul>
              <Switch>
                <Route path="/intro" exact component={Intro} />
                <Route path="/work" exact component={Work} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                {/* <Route path="*" component={ErrorPage} /> */}
              </Switch>
            </nav>
          </header>
          <footer id="footer">
            <p className="copyright">KevinLam.dev</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
