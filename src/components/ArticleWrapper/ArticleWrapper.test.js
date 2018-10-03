import React from 'react'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { MemoryRouter } from 'react-router'
import thunk from 'redux-thunk'

import state from 'articles/state'

import items from 'articles/items'

import ArticlePreview from 'components/ArticlePreview'
import ArticleWrapper from './index'

// Mocking store with test data
const mockStore = configureStore([thunk])
const store = mockStore(state)

describe('<ArticleWrapper />', () => {
  test('<ArticleWrapper /> snapshot', () => {
    const element = shallow(
      <ArticleWrapper store={store} id={items[0]._id} component={ArticlePreview} />
    )
    expect(element).toMatchSnapshot()
  })

  test('<ArticleWrapper /> mount with store', () => {
    const component = mount(
      <MemoryRouter initialEntries={[`/${items[0]._id}`]}>
        <ArticleWrapper topic="-topic" store={store} id={items[0]._id} component={ArticlePreview} />
      </MemoryRouter>
    )
    expect(component.text()).toBe(`${items[0].headline.main}-topic`)
  })
})
