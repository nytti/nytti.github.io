// Separate page article renderer
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { nyt } from 'config/config'

// Material UII
import { withStyles } from '@material-ui/core/styles'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

// Styles
import styles from './styles'

const { imageUrl } = nyt

export default
@withStyles(styles)
class Article extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    article: PropTypes.object.isRequired,
  }

  render() {
    const { classes, article } = this.props

    const {
      multimedia,
      snippet,
      headline: {
        main: title,
      },
    } = article

    const media = multimedia.find(({ subType }) => subType === 'master768') || multimedia[0]
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const date = new Date(article.pub_date).toLocaleDateString('en-US', options)

    return (
      <Fragment>
        { media && (
          <CardMedia
            className={classes.media}
            image={`${imageUrl}${media.url}`}
            title={title}
          />
        )}
        <CardContent>
          <Typography variant="caption" gutterBottom>
            { date }
          </Typography>
          <Typography gutterBottom variant="headline" component="h2">
            { title }
          </Typography>
          <Typography component="p" gutterBottom>
            { snippet }
          </Typography>
        </CardContent>
        <CardActions>
          <Button href={article.web_url} target="_blank" size="small" color="primary">
            Full Article
          </Button>
        </CardActions>
      </Fragment>
    )
  }
}
