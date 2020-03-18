import React, { Component } from 'react';

class ErrorPage extends Component {
  render(){
    return(
      <div className="content">
        <h1>This is our Error Page</h1>
        <h2>
          The page you are looking for {this.props.match.url} is not available
          at the moment.
        </h2>
      </div>
    )
  }
}

export default ErrorPage;
