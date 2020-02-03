import React, {Component} from 'react';

export default class Intro extends Component {
  render(){
    return (
      <article id="intro">
        <h2 className="major">Intro</h2>
        <span className="image main"><img src="images/pic01.jpg" alt="" /></span>
        <p>My name is Kevin Lam, I am a software developer based in NYC. Include hobbies here...?</p>
        <p>By the way, check out my projects here <a href="#work">GitHub</a>.</p>
      </article>
    )
  }
}
