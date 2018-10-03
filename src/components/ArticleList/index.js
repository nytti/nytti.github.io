// Pure component that renders news items in Material UI responsive GRID
// Looks nice on any display size from smartphone to TV

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// Material UI
import Grid from '@material-ui/core/Grid'

// Components
import ArticleWrapper from 'components/ArticleWrapper'
import ArticleListEmpty from 'components/ArticleListEmpty'
import ArticlePreview from 'components/ArticlePreview'

export default function ArticleListWrapper({ articles, topic }) {
  if (!articles.length) {
    return <ArticleListEmpty variant="headline" />
  }
  return (
    <Fragment>
      <Grid container spacing={16}>
        {
          articles.map(id => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={id}>
              <ArticleWrapper id={id} topic={topic} component={ArticlePreview} />
            </Grid>))
        }
      </Grid>
    </Fragment>
  )
}

ArticleListWrapper.propTypes = {
  articles: PropTypes.array.isRequired,
  topic: PropTypes.string.isRequired,
}
