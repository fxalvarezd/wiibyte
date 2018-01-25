import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Carousel } from 'react-responsive-carousel';
import cx from 'classnames';
import Navigation from '../../components/Navigation/Navigation';
import homeVideo from '../../assets/home-video.mp4';
import s from './Home.css';

class Home extends React.Component {
  state = {
    selectedPage: 0,
  };

  setSelectedPage = () => {
    // TODO
  };

  render() {
    return (
      <div>
        <div className={s.home}>
          <Carousel
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            onChange={this.setSelectedPage}
          >
            <div className={cx(s.slide)}>
              <div className={s.videoContainer}>
                {/* eslint-disable */}
                <video autoPlay loop="true" width="1280" height="720" muted>
                  <source type="video/mp4" src={homeVideo} />
                </video>
                { /* eslint-enable */ }
              </div>

              <div className={s.homeContent}>
                <h1>WiiByte</h1>
              </div>
            </div>

            <div className={cx(s.slide, s.two)} />

            <div className={cx(s.slide, s.three)} />
          </Carousel>
        </div>

        <Navigation
          selectedPage={this.state.selectedPage}
          onMenuClick={this.setSelectedPage}
        />
      </div>
    );
  }
}

export default withStyles(s)(Home);
