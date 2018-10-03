import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import state from 'articles/state'

import ArticleList from './index'

// Mocking store with test data
const mockStore = configureStore([thunk])
const store = mockStore(state)

describe('<ArticleListWrapper />', () => {
  test('<ArticleListWrapper /> snapshot', () => {
    const component = shallow(
      <ArticleList
        store={store}
        topic="fashion"
      />
    )
    expect(component).toMatchSnapshot()
  })
})
