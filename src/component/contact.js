import React, {Component} from 'react';


export default class Contact extends Component {
  render(){
    return (
      <article id="contact">
        <h2 className="major">Contact</h2>
        <form method="post" action="#">
          <div className="fields">
            <div className="field half">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows={4} defaultValue={""} />
            </div>
          </div>
          <ul className="actions">
            <li><input type="submit" defaultValue="Send Message" className="primary" /></li>
            <li><input type="reset" defaultValue="Reset" /></li>
          </ul>
        </form>
        <ul className="icons">
          <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
          <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
          <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
        </ul>
      </article>
    )
  }
}
