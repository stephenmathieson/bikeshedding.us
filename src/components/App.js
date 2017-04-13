import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Header from './Header'
import styles from './App.css'

const App = props => {
  const className = cx({
    [styles.app]: true,
    [styles.rotate]: props.rotate
  })
  return (
    <div className={className} style={{ backgroundColor: props.color }} onClick={props.onChangeColor}>
      <Header />
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  )
}

App.displayName = 'App'

App.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  rotate: PropTypes.bool
}

export default App
