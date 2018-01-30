import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Carousel } from 'react-responsive-carousel';
import Navigation from '../../components/Navigation/Navigation';
import HomeSlide from '../../components/Home';
import AboutSlide from '../../components/About';
import ContactSlide from '../../components/Contact';
import s from './Home.css';

class Home extends React.Component {
  state = {
    selectedPage: 0,
  };

  setSelectedPage = index => {
    if (this.state.selectedPage !== index) {
      this.setState({
        selectedPage: index,
      });
    }
  };

  render() {
    return (
      <div className={s.main}>
        <div className={s.home}>
          <Carousel
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            onChange={this.setSelectedPage}
            selectedItem={this.state.selectedPage}
          >
            <HomeSlide />
            <AboutSlide />
            <ContactSlide />
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
