import React from 'react'
import PropTypes from 'prop-types'
import ArticleListWrapper from 'components/ArticleListWrapper'
import { nyt } from 'config/config'

export default function ArticleListPage({ match: { params: { topic } } }) {
  return (
    <ArticleListWrapper topic={topic || nyt.defaultSearch} />
  )
}

ArticleListPage.propTypes = {
  match: PropTypes.object.isRequired,
}
