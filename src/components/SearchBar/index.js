// Component is reesponsible for search input handling
// Search will start on [enter] key or blur if input is not empty

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

// Material UI
import { withStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import Input from '@material-ui/core/Input'

// Styles
import styles from './styles'

export default
@withRouter
@withStyles(styles)
class SearchBar extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  toggleSearch = (searchText) => {
    const { history } = this.props
    const term = searchText.trim()
    if (term) {
      history.push(`/topic/${encodeURIComponent(term)}`)
    }
  }

  handleSearch = event => this.toggleSearch(event.target.value)

  handleSearchKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.toggleSearch(event.target.value)
    }
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <Input
          placeholder="Search topic…"
          onBlur={this.handleSearch}
          onChange={this.handleSearchUpdate}
          onKeyPress={this.handleSearchKeyPress}
          disableUnderline
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>
    )
  }
}
