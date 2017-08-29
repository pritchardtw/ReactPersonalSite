import React, { Component } from 'react';
import SectionBreak from '../sectionbreak';
import ReactRedux from './reactredux';
import ReactReduxApps from './reactreduxapps';
import Baywatch from './baywatch';
import CodeAcademy from './codeacademy';
import PersonalSite from './personalsite';
import ReactPersonalSite from './reactpersonalsite';

export default class Web extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return(
      <div>
        <ReactPersonalSite />
        <SectionBreak />
        <ReactRedux />
        <SectionBreak />
        <ReactReduxApps />
        <SectionBreak />
        <Baywatch />
        <SectionBreak />
        <CodeAcademy />
        <SectionBreak />
        <PersonalSite />
      </div>
    );
  }
}
