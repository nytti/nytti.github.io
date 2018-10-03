import items from 'articles/items'

import { loadArticles } from './nyt'

describe('utils: loadArticles getter', () => {
  test('nyt.loadArticles stub test', async () => {
    const result = await loadArticles('facebook')()
    // Testing structure of three result entities
    expect(result.topic).toBe('facebook')
    expect(result.articles[items[0]._id].snippet).toBe(items[0].snippet)
    expect(result.searchList[0]).toBe(items[0]._id)
  })
})
