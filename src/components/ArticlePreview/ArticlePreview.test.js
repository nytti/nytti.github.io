import React from 'react'
import { shallow } from 'enzyme'

import items from 'articles/items'

import ArticlePreview from './index'

describe('<ArticlePreview />', () => {
  test('<ArticlePreview /> snapshot', () => {
    const element = shallow(<ArticlePreview article={items[0]} topic="test" />)
    expect(element).toMatchSnapshot()
  })
})
