import React, { Component } from 'react';
import IntelliJoe from './intellijoe';
import SectionBreak from '../sectionbreak';

export default class Embedded extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return(
      <div>
        <IntelliJoe />
        <SectionBreak />
      </div>
    );
  }
}
