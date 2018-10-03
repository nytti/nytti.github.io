// This is main App component, but it's not running directly from html inclusion
// It should be wrapped by entry.js initialiser used by webpack to provide
// development bindings (hot loader, logger) and production bindings for build

import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import ScrollToTop from 'components/ScrollToTop'

import Routes from './pages'

// Router selection is made due to following task requirement:
// "We should be able to run the exercise, just by opening your index.html file."
const RouterComponent = document.location.protocol === 'file:'
  ? HashRouter : BrowserRouter

// App wraps routes with: Redux store, redux-backed router, scroll fixer,
// Material UI basic CSS and selected router.
export default function App({ store, history }) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ScrollToTop>
          <CssBaseline />
          <RouterComponent>
            <Routes />
          </RouterComponent>
        </ScrollToTop>
      </ConnectedRouter>
    </Provider>
  )
}

App.propTypes = {
  store: PropTypes.any.isRequired,
  history: PropTypes.any.isRequired,
}
