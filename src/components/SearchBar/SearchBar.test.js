import React from 'react'
import { shallow } from 'enzyme'

import SearchBar from './index'

describe('<SearchBar />', () => {
  test('<SearchBar /> Snapshot', () => {
    const element = shallow(<SearchBar />)
    expect(element).toMatchSnapshot()
  })
})
