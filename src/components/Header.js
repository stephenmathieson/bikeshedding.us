import React from 'react'
import { Link } from 'react-router'
import styles from './Header.css'

const Header = props => (
  <header className={styles.header}>
    <h1>Bike Shedding · us</h1>
    <nav className={styles.navigation}>
      <ul>
        <li><Link to='/'>/</Link></li>
        <li><Link to='/email'>/email</Link></li>
      </ul>
    </nav>
  </header>
)

Header.displayName = 'Header'

Header.propTypes = {}

export default Header
