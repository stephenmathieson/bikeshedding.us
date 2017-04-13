import React from 'react'
import PropTypes from 'prop-types'
import styles from './Home.css'

const Home = props => (
  <div className={styles.home}>
    <button className={styles.imageContainer} onClick={props.onChangeBikeShed}>
      <img src={props.imageURL} alt='bike shed' />
    </button>
  </div>
)

Home.displayName = 'Home'

Home.propTypes = {
  imageURL: PropTypes.string.isRequired,
  onChangeBikeShed: PropTypes.func.isRequired
}

export default Home
