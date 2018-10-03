import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import items from 'articles/items'
import state from 'articles/state'

import ArticleList from './index'

// Mocking store with one article

// Mocking store with test data
const mockStore = configureStore([thunk])
const store = mockStore(state)

describe('<ArticleList />', () => {
  test('<ArticleList /> snapshot', () => {
    const component = shallow(
      <ArticleList
        store={store}
        topic="fashion"
        articles={[items[0]._id]}
      />
    )
    expect(component).toMatchSnapshot()
  })

  test('<ArticleList /> empty snapshot', () => {
    const component = shallow(
      <ArticleList
        store={store}
        topic="fashion"
        articles={[]}
      />
    )
    expect(component).toMatchSnapshot()
  })
})
