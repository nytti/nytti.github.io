import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import configureStore from '../src/configureStore'
import App from '../src/App'

const history = createHistory()
const store = configureStore(history)

ReactDOM.render(
  <App {...{ store, history }} />,
  document.getElementById('root')
)
