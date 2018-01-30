import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import homeVideo from '../../assets/home-video.mp4';
import logo from '../../assets/logo.png';
import s from './styles.css';

class HomeSlide extends React.Component {
  render() {
    return (
      <div className="homeSlide">
        <div className={s.videoContainer}>
          {/* eslint-disable */}
          <video autoPlay loop="true" width="1280" height="720" muted>
            <source type="video/mp4" src={homeVideo} />
          </video>
          { /* eslint-enable */ }
        </div>

        <div className={s.homeContent}>
          <img className={s.logo} src={logo} alt="WiiByte" />
          <p className={s.tagline}>YOUR NEEDS.</p>
          <p className={s.tagline}>OUR PASSION.</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HomeSlide);
