import 'babel-polyfill'
import 'normalize.css'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import './base.css'

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
)
