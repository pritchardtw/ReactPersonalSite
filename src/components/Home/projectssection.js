import React, { Component } from 'react';
import ProjectLink from './projectlink';

export default class ProjectsSection extends Component {
  render() {
    return (
      <div className="content">
        <a id="ProjectsSection"/>
        <h1>Projects!</h1>
        <div className="row">
          <div className="col-sm-4">
            <ProjectLink name="Embedded" />
          </div>
          <div className="col-sm-4">
            <ProjectLink name="Application" />
          </div>
          <div className="col-sm-4">
            <ProjectLink name="Web" />
          </div>
        </div>
      </div>
    );
  }
}
