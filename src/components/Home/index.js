import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import homeVideo from '../../assets/home-video.mp4';
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
          <h1>WiiByte</h1>
          <p className={s.tagline}>Lorem Ipsum</p>
          <p className={s.tagline}>Dolor sit Amet</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HomeSlide);
