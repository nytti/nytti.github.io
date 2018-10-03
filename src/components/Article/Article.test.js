import React from 'react'
import { shallow } from 'enzyme'

import items from 'articles/items'

import Article from './index'

describe('<Article />', () => {
  test('<Article /> snapshot', () => {
    const element = shallow(<Article article={items[0]} />)
    expect(element).toMatchSnapshot()
  })
})
