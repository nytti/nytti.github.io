import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { createLogger } from 'redux-logger'
import configureStore from '../src/configureStore'
import HotApp from './HotApp'

const history = createHistory()
const logger = createLogger({ collapsed: true })
const store = configureStore(history, logger)

ReactDOM.render(
  <HotApp store={store} history={history} />,
  document.getElementById('root')
)
