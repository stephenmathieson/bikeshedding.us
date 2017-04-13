import { createElement, Component } from 'react'
import Email from '../components/Email'

class EmailContainer extends Component {
  render () {
    return createElement(Email)
  }

  componentDidMount () {
    global.analytics.page('Email')
  }
}

export default EmailContainer
