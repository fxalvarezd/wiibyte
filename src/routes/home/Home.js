import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Home.css'

class Home extends React.Component {
  static propTypes = {
    xxx: PropTypes.string,
  };

  static defaultProps = {
    xxx: null,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>WiiByte</h1>
          <p>Hey There!! {this.props.xxx}</p>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Home)
