import { loadArticles } from 'utils/nyt'

// Maximum articles to show in list
const ARTICLES_LIMIT = 10

export const searchArticles = (topic, cancelToken) =>
  loadArticles(topic, ARTICLES_LIMIT, cancelToken)
