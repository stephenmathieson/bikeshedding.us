import React from 'react'
import email from './Email.txt'
import styles from './Email.css'

const Email = props => (
  <div className={styles.email}>
    <pre>
      {email}
    </pre>
  </div>
)

Email.displayName = 'Email'

Email.propTypes = {
}

export default Email
