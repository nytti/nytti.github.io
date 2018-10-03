import React from 'react'
import PropTypes from 'prop-types'

import ArticleWrapper from 'components/ArticleWrapper'
import Article from 'components/Article'

export default function ArticlePage({ match: { params: { id } } }) {
  return (
    <ArticleWrapper id={id} component={Article} />
  )
}

ArticlePage.propTypes = {
  match: PropTypes.object.isRequired,
}
