import React, {Component} from 'react';

export default class Work extends Component {
  render(){
    return (
      <article id="work">
        <h2 className="major">Work</h2>
        {/* <span className="image main"><img src="images/pic02.jpg" alt="" /></span> */}
        <p>Here are a few of my projects!</p>
        <ul>
          <li>Dynamic Dogs</li>
          <li>Pups Up?</li>
          <li>Bounty Hunt-AR</li>
        </ul>
      </article>
    )
  }
}
