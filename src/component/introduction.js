import React, { Component } from "react";

export default class Intro extends Component {
  render() {
    return (
      <article id="intro">
        <h2 className="major">Intro</h2>
        {/* <span className="image main"><img src="images/pic01.jpg" alt="" /></span> */}
        <p>Hello! I'm Kevin, a software developer based in NYC. </p>
        <p>
          After graduating from trade school, I started off my career as an
          automotive technician. What brought me into the automotive industry is
          my passion for cars. I have always enjoyed breaking things down and
          rebuilding them, figuring out how the internals work in the process. I
          soon found the same passion with software development after diving
          into Javascript with online classes and local meetups. During my time
          at Fullstack Academy, I learned to use different tools and frameworks
          to put an application together. With these different technologies in
          my toolbox I was able to go from creating web applications to mobile
          applications. I look forward to expanding my knowledge as a software
          engineer and adding more technologies to my toolbox.
        </p>
      </article>
    );
  }
}
