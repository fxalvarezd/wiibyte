import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import FontAwesome from 'react-fontawesome';
import s from './Navigation.css';
import logo from '../../assets/logo.png';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.navigation}>
        <div className={s.container}>
          <div className={s.logo}>
            <img src={logo} alt="WiiByte" />
          </div>

          <div>
            <div className={s.menuItem}>Home</div>
            <div className={s.menuItem}>About Us</div>
            <div className={s.menuItem}>Contact</div>
          </div>

          <div className={s.social}>
            <div className={s.socialItem}>
              <a href="http://www.twitter.com">
                <FontAwesome className={s.socialIcon} name="twitter" />
              </a>
            </div>
            <div className={s.socialItem}>
              <a href="http://www.pinterest.com">
                <FontAwesome className={s.socialIcon} name="pinterest" />
              </a>
            </div>
            <div className={s.socialItem}>
              <a href="http://www.facebook.com">
                <FontAwesome className={s.socialIcon} name="facebook" />
              </a>
            </div>
            <div className={s.socialItem}>
              <a href="http://www.youtube.com">
                <FontAwesome className={s.socialIcon} name="youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
