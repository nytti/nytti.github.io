// Weapping SVG Logo with link to root
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Material UI
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

// Atoms
import Logo from 'atoms/Logo'

// Style
import styles from './styles'

export default
@withStyles(styles)
class LogoLink extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { classes } = this.props
    return (
      <Typography>
        <Link to="/" className={classes.link}>
          <Logo />
        </Link>
      </Typography>
    )
  }
}
