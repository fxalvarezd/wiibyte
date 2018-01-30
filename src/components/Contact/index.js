import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';

class ContactSlide extends React.Component {
  render() {
    return (
      <div className="homeSlide">
        <div className={s.contact}>Contact</div>
      </div>
    );
  }
}

export default withStyles(s)(ContactSlide);
