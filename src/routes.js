import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import Email from './containers/Email'
import NotFound from './containers/NotFound'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} title='Bikeshedding.us' />
    <Route path='email' component={Email} title='The Bikeshed Email | Bikeshedding.us' />
    <Route path='*' component={NotFound} title='Not Found | Bikeshedding.us' />
  </Route>
)

export default routes
