import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css'
import s from './Layout.css'
import Navigation from '../Navigation'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={s.main}>
        <div>
          {this.props.children}
        </div>
        <Navigation />
      </div>
    )
  }
}

export default withStyles(normalizeCss, s)(Layout)
