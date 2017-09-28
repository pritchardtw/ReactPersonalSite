import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

export default class ProjectLink extends Component {

  renderPoints() {
    return _.map(this.props.points, (point, index) => {
      return (<li key={index}>{point}</li>);
    });
  }

  render() {
    return(
      <Link to={this.props.name}>
        <div className="projectlink">
          <div className="image-class" id={this.props.name}></div>
          <h1>{this.props.name}!</h1>
          <ul>
            {this.renderPoints()}
          </ul>
        </div>
      </Link>
    )
  }
}
