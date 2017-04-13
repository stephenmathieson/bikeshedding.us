import { createElement, Component } from 'react'
import randomcolor from 'randomcolor'
import konami from 'konami-js'
import App from '../components/App'

class AppContainer extends Component {
  constructor () {
    super()

    this.state = {
      color: '#adf9ff',
      rotate: false
    }
  }

  render () {
    return createElement(App, {
      ...this.state,
      children: this.props.children,
      onChangeColor: this.onChangeColor
    })
  }

  onChangeColor = () => {
    const previousColor = this.state.color
    const nextColor = randomcolor()

    this.setState({ color: nextColor })

    global.analytics.track('Color Changed', {
      previous_color: previousColor,
      next_color: nextColor
    })
  }

  componentDidMount () {
    konami(() => {
      this.setState({ rotate: true })
    })
  }
}

export default AppContainer
