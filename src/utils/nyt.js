import { nytSearchArticles } from 'utils/api'
import keyBy from 'lodash/keyBy'

export const loadArticles = (topic, limit = 10) => async () => {
  let list = []

  // Some of search results are not "articles"
  // let's have three tries to get [limit] results
  for (let i = 0; i < limit / 3; i += 1) {
    const items = await nytSearchArticles(topic, i)
    list = [
      ...list,
      ...items.filter(item => item.document_type === 'article'),
    ]
    if (list.length >= limit || items.length < 10) {
      break
    }
  }
  const articles = keyBy(list.slice(0, limit), '_id')
  const searchList = Object.keys(articles)
  return {
    // Search topic (key for store)
    topic,
    // List of normalized articles for store
    articles,
    // Normalized search result
    searchList
  }
}
