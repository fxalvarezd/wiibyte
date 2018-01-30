import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';

class AboutSlide extends React.Component {
  render() {
    return (
      <div className="homeSlide">
        <div className={s.about}>About</div>
      </div>
    );
  }
}

export default withStyles(s)(AboutSlide);
