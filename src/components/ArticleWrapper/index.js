// News Item wrapper used for generalizing state selector
// It's used for both preview and separate page articles
// So it's receiving component for rendering

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Selectos
import { getArticle } from 'selectors/article'

// Components
import ArticleNotFound from 'components/ArticleNotFound'

const mapStateToProps = (state, { id }) => ({
  article: getArticle(state, { id })
})

export default
@connect(mapStateToProps)
class ArticleWrapper extends Component {
  static propTypes = {
    article: PropTypes.object,
    topic: PropTypes.string,
    component: PropTypes.func.isRequired,
  }

  render() {
    const { topic, article, component: Render } = this.props
    if (!article) {
      return <ArticleNotFound />
    }
    return (
      <Render
        key={article._id}
        article={article}
        topic={topic}
      />
    )
  }
}
