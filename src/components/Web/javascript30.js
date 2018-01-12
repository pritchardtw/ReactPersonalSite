import React, { Component } from 'react';
import Javascript30Links from './javascript30_links';
import Project from '../project';

const images = [
  '../../static/images/web/javascript30.png',
];

export default class Javascript30 extends Component {
  render() {
    return(
      <div>
        <Project
          title="Javascript30!"
          link="https://javascript30.com/"
          description="Javscript30 is a 30 day challenge where you complete one
          small javascript app per day for 30 days. It's all bare-bones javascript.
          After speaking with some veteran developers about their complaints with
          new developers, they explained new devs know a lot about modern frameworks,
          but not so much about Javascript basics. This is part of my effort to
          buff up my basic javascript knowledge.
          I took more than 30 days, sometimes doing more than one per day,
          sometimes doing none. I learned a boatload about things like dom
          manipulation, native browser features, and interfacing with hardware
          like the local storage, web cams, and microphones. Did you know the
          browser can do text to speach AND speach to text?!
          Check out the link above to gain more insight into Javascript30."
          images={images} />
          <Javascript30Links />
        </div>
    );
  }
}
