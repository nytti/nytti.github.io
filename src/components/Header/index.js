// Header is only wrapping logo and searchbar

import React from 'react'

// Material UI
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

// Components
import SearchBar from 'components/SearchBar'
import LogoLink from 'components/LogoLink'

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <LogoLink />
        <SearchBar />
      </Toolbar>
    </AppBar>
  )
}
