import axios from 'axios'
import axiosRetry from 'axios-retry'
import { nyt } from 'config/config'

const { apiKey, apiUrl } = nyt
const searchUrl = `${apiUrl}/search/v2/articlesearch.json`

// axios-retry is used to prevent 429 error from NYT
axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay })

export const nytSearchArticles = async (topic, page = 0) => {
  const result = await axios.get(searchUrl, {
    params: {
      'api-key': apiKey,
      page,
      q: encodeURIComponent(topic),
    }
  })
  return result.data.response.docs
}
