import React from 'react'
import { shallow } from 'enzyme'

import ArticleNotFound from './index'

describe('<ArticleNotFound />', () => {
  test('<ArticleNotFound /> snapshot', () => {
    const element = shallow(<ArticleNotFound />)
    expect(element).toMatchSnapshot()
  })
})
