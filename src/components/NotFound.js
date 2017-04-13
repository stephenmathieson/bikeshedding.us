import React from 'react'
import styles from './NotFound.css'

const NotFound = props => (
  <div className={styles.notFound}>
    <marquee>
      <h2>404 - Not Found</h2>
    </marquee>
  </div>
)

NotFound.displayName = 'NotFound'

NotFound.propTypes = {}

export default NotFound
