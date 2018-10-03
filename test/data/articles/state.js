import items from './items'

export default {
  // Preloaded search "fashion" and article
  entities: {
    NYT_SEARCH_ARTICLES: {
      fashion: [
        items[0]._id,
      ],
    },
    NYT_ARTICLES: {
      [items[0]._id]: items[0]
    }
  },
  // Router data
  router: {
    location: {
      hash: '',
      pathname: '/topic/fashion',
      search: '',
    },
  },
  // Getters stub
  getters: {},
}
