import React from 'react'
import { shallow } from 'enzyme'

import ArticleListEmpty from './index'

describe('<ArticleListEmpty />', () => {
  test('<ArticleListEmpty /> snapshot', () => {
    const element = shallow(<ArticleListEmpty />)
    expect(element).toMatchSnapshot()
  })
})
