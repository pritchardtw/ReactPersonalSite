import React, { Component } from 'react';
import Project from '../project';

const images = [
  '../../static/images/web/true_health.png'
];

export default class HealthApp extends Component {

  render() {
    return(
      <Project
        title="Health App!"
        description="I am building an app to help people learn what it means to eat healthy. I've got a basic UI working
        with react and redux. Next is to develop the API (currently hardcoded JSON being fed into the app via redux), create
        authentication capability, and collaborate with a nutritionist to develop a healthy meal plan."
        images={images} />
    );
  }
}
