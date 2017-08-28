import React, { Component } from 'react';
import HomeTab from '../hometab';
import PictureViewer from '../pictureviewer';

const images = [
  '../../static/images/web/blog1.png',
  '../../static/images/web/blog2.png',
  '../../static/images/web/blog3.png',
];

export default class ReactRedux extends Component {

  render() {
    return(
      <div className="project">
        <HomeTab />
        <h1>React & Redux!</h1>
        <p>
          React and Redux App!
        </p>
        <PictureViewer images={images} pictureStyle="rowofthree"/>
      </div>
    );
  }
}
