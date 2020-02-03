import React from 'react';
import logo from './logo.svg';
import './App.css';

import Intro from './component/introduction';
import Work from './component/work';
import About from './component/about';
import Contact from './component/contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Kevin Lam
        </h1>

        <h1>Software Engineer based in NYC!</h1>
        <p>Fullstack Developer | UX/UI Enthusiast | Automotive Photography Enthusiast</p>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Intro/>
        <Work/>
        <About/>
        <Contact/>
      </header>
    </div>
  );
}

export default App;
