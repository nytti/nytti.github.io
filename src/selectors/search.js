import { createGetter } from 'utils/reduxGetters'
import { replaceEntities, getEntity } from 'utils/reduxEntities'
import { NYT_SEARCH_ARTICLES, NYT_ARTICLES } from 'constants/entityNames'
import { searchArticles } from 'actions/nyt'

// I'm using getter library providing fallback from store to API if store has no proper object
export const getSearchResult = createGetter({
  stateSelector: (state, params) => getEntity(state, NYT_SEARCH_ARTICLES, params.topic),
  asyncFetcher: (dispatch, state, params) => dispatch(searchArticles(params.topic)),
  stateUpdater: ({ topic, articles, searchList }, dispatch) => {
    dispatch(replaceEntities(NYT_ARTICLES, articles))
    dispatch(replaceEntities(NYT_SEARCH_ARTICLES, { [topic]: searchList }))
  }
})
