import React from 'react'
import { shallow } from 'enzyme'

import LogoLink from './index'

describe('<LogoLink />', () => {
  test('<LogoLink /> snapshot', () => {
    const element = shallow(<LogoLink />)
    expect(element).toMatchSnapshot()
  })
})
