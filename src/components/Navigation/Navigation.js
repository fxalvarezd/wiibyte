import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Navigation.css'
import Link from '../Link'

class Footer extends React.Component {
  render() {
    return (
      <div className={s.navigation}>
        <div className={s.container}>
          <Link className={s.logo} to="/">
            Logo
          </Link>
          <div>
            <div className={s.menuItem}>Home</div>
            <div className={s.menuItem}>About Us</div>
            <div className={s.menuItem}>Contact</div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Footer)
