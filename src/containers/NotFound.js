import { createElement, Component } from 'react'
import NotFound from '../components/NotFound'

class NotFoundContainer extends Component {
  render () {
    return createElement(NotFound)
  }

  componentDidMount () {
    global.analytics.page('NotFound')
  }
}

export default NotFoundContainer
