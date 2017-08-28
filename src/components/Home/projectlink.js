import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProjectLink extends Component {
  render() {
    return(
      <div className="projectlink">
        <Link to={this.props.name}>
          <h1>{this.props.name}!</h1>
          <div className="image-class" id={this.props.name}>
          </div>
        </Link>
      </div>
    )
  }
}
