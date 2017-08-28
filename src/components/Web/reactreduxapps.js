import React, { Component } from 'react';
import HomeTab from '../hometab';
import PictureViewer from '../pictureviewer';

const images = [
  '../../static/images/web/youtube_search.png',
  '../../static/images/web/book_explorer.png',
  '../../static/images/web/weather_app.png',
];

export default class ReactReduxApps extends Component {

  render() {
    return(
      <div className="project">
        <HomeTab />
        <h1>React & Redux!</h1>
        <p>
          React and Redux Apps!
        </p>
        <PictureViewer images={images} pictureStyle="rowofthree" />
      </div>
    );
  }
}
