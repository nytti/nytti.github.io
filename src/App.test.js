import React from 'react'
import { render } from 'enzyme'
import configureStore from 'redux-mock-store'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'

import state from 'articles/state'

import App from './App'

// Mocking store with test data
const mockStore = configureStore([thunk])
const store = mockStore(state)

describe('<App />', () => {
  test('<App /> snapshot', () => {
    const history = createHistory()
    const component = render(
      <App store={store} history={history} />
    )
    expect(component).toMatchSnapshot()
  })
})
