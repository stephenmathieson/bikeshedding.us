import React from 'react'
import { Link } from 'react-router'
import styles from './Header.css'

// a HeaderLink prevents the `click` from bubbling, which will
// allow navigation without changing the App bg color
const HeaderLink = props => (
  <Link to={props.to} onClick={e => e.stopPropagation()}>{props.children}</Link>
)

const Header = props => (
  <header className={styles.header}>
    <h1>Bike Shedding · us</h1>
    <nav className={styles.navigation}>
      <ul>
        <li><HeaderLink to='/'>/</HeaderLink></li>
        <li><HeaderLink to='/email'>/email</HeaderLink></li>
      </ul>
    </nav>
  </header>
)

Header.displayName = 'Header'

Header.propTypes = {}

export default Header
