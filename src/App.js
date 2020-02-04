import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"


import Home from './component/home';
import Intro from './component/introduction';
import Work from './component/work';
import About from './component/about';
import Contact from './component/contact';

function App() {
  return (
    <div className="App">
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
              <Home/>
            </div>
          </div>
          <nav>
            <ul>
              <li><a href="/intro">Intro</a></li>
              <li><a href="/work">Work</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              {/*<li><a href="#elements">Elements</a></li>*/}
            </ul>
            <Router>
              <Route path="/intro" exact component={Intro} />
              <Route path="/work" exact component={Work} />
              <Route path="/about" exact component={About} />
              <Route path="/contact" exact component={Contact} />
            </Router>
          </nav>
        </header>
        <footer id="footer">
        <p className="copyright">KevinLam.dev</p>
      </footer>
      </div>
    </div>
  );
}

export default App;
