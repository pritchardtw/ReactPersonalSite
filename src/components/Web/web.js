import React, { Component } from 'react';
import SectionBreak from '../sectionbreak';
import ReactRedux from './reactredux';
import ReactReduxApps from './reactreduxapps';

export default class Web extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return(
      <div>
        <ReactRedux />
        <SectionBreak />
        <ReactReduxApps />
        <SectionBreak />
      </div>
    );
  }
}
