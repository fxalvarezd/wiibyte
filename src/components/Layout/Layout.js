import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={s.layout}>
        <div className={s.main}>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
