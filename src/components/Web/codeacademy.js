import React, { Component } from 'react';
import Project from '../project';

const images = [
  '../../static/images/web/codeacademy_complete_courses.png'
];

export default class CodeAcademy extends Component {

  render() {
    return(
      <Project
        title="CodeAcademy!"
        description="I've been doing web work on codeacademy.com!"
        images={images} />
    );
  }
}
