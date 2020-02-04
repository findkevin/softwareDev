import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './component/home';
import Intro from './component/introduction';
import Work from './component/work';
import About from './component/about';
import Contact from './component/contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home/>
        <Intro/>
        <Work/>
        <About/>
        <Contact/>
      </header>
    </div>
  );
}

export default App;
