import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import FontAwesome from 'react-fontawesome';
import cx from 'classnames';
import s from './Navigation.css';
import logo from '../../assets/logo.png';

class Navigation extends React.Component {
  static propTypes = {
    selectedPage: PropTypes.number,
    onMenuClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    selectedPage: 0,
  };

  selectPage(index) {
    this.props.onMenuClick(index);
  }

  renderNavLinks() {
    const pages = ['Home', 'About Us', 'Contact Us'];

    return pages.map((page, index) => {
      /* eslint-disable */
      const isActive = this.props.selectedPage === index ? s.active : '';
      /* eslint-enable */

      return (
        <div
          className={cx(s.menuItem, isActive)}
          onClick={() => this.selectPage(index)}
          role="menuitem"
          tabIndex={index}
          onKeyPress={() => this.selectPage(index)}
          key={page}
        >
          {page}
        </div>
      );
    });
  }

  render() {
    return (
      <div className={s.navigation}>
        <div className={s.container}>
          <div className={s.logo}>
            <img src={logo} alt="WiiByte" />
          </div>

          <div>{this.renderNavLinks()}</div>

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

export default withStyles(s)(Navigation);
