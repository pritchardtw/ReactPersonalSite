import React, { Component } from 'react';
import Project from '../project';

const images = [
];

export default class ReactPersonalSite extends Component {

  render() {
    return(
      <Project
        title="Personal Website in React!"
        description="This website is written in react! After taking 'Modern React & Redux' on udemy by Stephen Grider I was able to
        re-write my site in react."
        images={images} />
    );
  }
}
