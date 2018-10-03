import React from 'react'
import { shallow } from 'enzyme'

import Header from './index'

describe('<Header />', () => {
  test('<Header /> Snapshot', () => {
    const element = shallow(<Header onSearch={() => true} />)
    expect(element).toMatchSnapshot()
  })
})
