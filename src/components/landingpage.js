import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/22046710_10100989401139183_7549923698899773335_n.jpg?_nc_cat=100&_nc_oc=AQkxhZJR3nCX4imga2W4nsym5sEBz31nDeIfP3sLyAK4X2Pb2IlL3BeHnmaZv4zpsrMxhSzFNinQRE-xz4e4gT-m&_nc_ht=scontent-ort2-2.xx&oh=1fde5eff82cef1ecb4dfab6a9d2a20a6&oe=5DA363C5"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
                <h1>Full Stack Web Developer</h1>

            <hr/>

            <p>Ruby on Rails | Javascript | React | React Native | HTML/CSS | NodeJS</p>

            <div className="social-links">

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/ericdroth/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* GitHub */}
              <a href="https://github.com/EricRoth85" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

              {/* YouTube */}
              <a href="https://www.youtube.com/channel/UC5u5oOkMumAE1CtQIHdkaXw?view_as=subscriber" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-youtube-square" aria-hidden="true" />
              </a>

            </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
