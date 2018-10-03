// Wrapping component is used to handle selectors and loading process

import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { connectGetters } from 'utils/reduxGetters'
import { getSearchResult } from 'selectors/search'

// Material UI
import { withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

// Components
import ArticleList from 'components/ArticleList'

// Styles
import styles from './styles'

const mapGettersToProps = (state, { topic }) => ({
  searchResultGetter: getSearchResult(state, { topic }),
})

export default
@withStyles(styles)
@connectGetters(mapGettersToProps)
class ArticleListWrapper extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    searchResultGetter: PropTypes.object.isRequired,
    topic: PropTypes.string.isRequired,
  }

  render() {
    const { topic, searchResultGetter, classes } = this.props
    const articles = searchResultGetter.data
    return (
      <Fragment>
        { searchResultGetter.isPending && (
          <LinearProgress />
        )}
        {
          searchResultGetter.isSucceded && (
            <div className={classes.root}>
              <ArticleList
                articles={articles}
                topic={topic}
              />
            </div>
          )}
      </Fragment>
    )
  }
}
