// Test disabled due to long API response time and possible API error states

import { nytSearchArticles } from './api'

describe('utils: nytSearchArticles  getter', () => {
  test.skip('api.nytSearchArticles real api test', async () => {
    const result = await nytSearchArticles('new york')
    expect(result.length).toBeGreaterThan(0)
    expect(result.length).toBeLessThan(11)
    expect(result[0].web_url).toBeDefined()
  })
})
