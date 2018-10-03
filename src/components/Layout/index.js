import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      { children }
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}
