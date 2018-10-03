// Display when Article is not found or opened by direct link

import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Material UI
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

// Styles
import styles from './styles'

export default
@withStyles(styles)
class ArticleNotFound extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Typography variant="headline">
          Article not found
        </Typography>
      </div>
    )
  }
}
