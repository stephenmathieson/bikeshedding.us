import 'babel-polyfill'
import 'normalize.css'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import './base.css'

// find/create our mount point
// XXX: in development, <div id=root> will not exist
let root = document.getElementById('root')
if (!root) {
  root = document.createElement('div')
  document.body.appendChild(root)
}

render(<Router history={browserHistory} routes={routes} />, root)
