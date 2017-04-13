import { createElement, Component } from 'react'
import getRandomBikeshedURL from '../lib/getRandomBikeshedURL'
import Home from '../components/Home'

class HomeContainer extends Component {
  constructor () {
    super()
    this.state = {
      imageURL: getRandomBikeshedURL()
    }
  }

  render () {
    return createElement(Home, {
      ...this.state,
      onChangeBikeShed: this.onChangeBikeShed
    })
  }

  componentDidMount () {
    global.analytics.page('Home')
  }

  onChangeBikeShed = e => {
    e.stopPropagation()

    const { imageURL } = this.state
    this.setState({
      imageURL: getRandomBikeshedURL()
    })

    global.analytics.track('Bike Shed Clicked', {
      bike_shed: imageURL
    })
  }
}

export default HomeContainer
