import React from 'react'
import { shallow } from 'enzyme'

import Logo from './index'

describe('<Logo />', () => {
  test('Snapshot <Logo />', () => {
    const element = shallow(<Logo />)
    expect(element).toMatchSnapshot()
  })
})
