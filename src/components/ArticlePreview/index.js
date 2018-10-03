// One item in news list. This component is stateful and little tricky -
// it handles news item modal dialog rendering to make system architecture
// more encapsulated

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Material UI
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'

import { nyt } from 'config/config'

// Styles
import styles from './styles'

const { imageUrl } = nyt

export default
@withStyles(styles)
class ArticlePreview extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    article: PropTypes.object.isRequired,
    topic: PropTypes.string.isRequired,
  }

  render() {
    const { article, classes, topic } = this.props
    const {
      _id: id,
      multimedia,
      headline: {
        main: title,
      },
    } = article
    const media = multimedia.find(({ subType }) => subType === 'master768') || multimedia[0]

    return (
      <Card className={classes.root}>
        <Link to={`/${id}`} className={classes.link}>
          <CardActionArea className={classes.action}>
            <CardContent>
              <Typography>
                { title }
              </Typography>
            </CardContent>
            { media && (
              <CardMedia
                className={classes.media}
                image={`${imageUrl}${media.url}`}
                title={title}
              />
            )}
            <CardContent>
              <Typography component="p" color="textSecondary">
                { topic }
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    )
  }
}
