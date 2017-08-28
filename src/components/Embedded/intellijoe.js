import React, { Component } from 'react';
import HomeTab from '../hometab';

export default class IntelliJoe extends Component {
  render() {
    return(
      <div className="project">
        <HomeTab />
        <h1>Intelli-Joe!</h1>
        <p>
          The intelli-joe is a coffee pot!
        </p>
        <img className="img-responsive" src="../../static/images/embedded/intellijoe/blockdiagram.png" />
      </div>
    );
  }
}
