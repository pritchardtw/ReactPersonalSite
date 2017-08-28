import React, { Component } from 'react';
import HomeTab from './hometab';

export default class Backgroundify extends Component {
  render() {
    return(
      <div className="project">
        <HomeTab />
        <h1>Backgroundify!</h1>
        <p>
          Backgroundify App!
        </p>
        <img className="img-responsive" src="../../static/images/embedded/intellijoe/blockdiagram.png" />
      </div>
    );
  }
}
