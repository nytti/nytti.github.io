import { createSelector } from 'reselect'
import { getEntity } from 'utils/reduxEntities'
import { NYT_ARTICLES } from 'constants/entityNames'

const getArticleEntity = (state, params) => getEntity(state, NYT_ARTICLES, params.id)

export const getArticle = createSelector(
  getArticleEntity,
  result => result
)
