import React from 'react'
import { shallow } from 'enzyme'

import Layout from './index'

describe('<Layout />', () => {
  test('<Layout /> snapshot', () => {
    const element = shallow(<Layout />)
    expect(element).toMatchSnapshot()
  })
})
