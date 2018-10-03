// Helper for creating reducer for entities,
// Getter and replacer

import pick from 'lodash/pick'
import reduce from 'lodash/reduce'
import assign from 'lodash/assign'

const REPLACE_ENTITIES = 'REPLACE_ENTITIES'

// Replace entities in collection
export const replaceEntities = (collectionName, entities) => ({
  type: REPLACE_ENTITIES,
  collectionName,
  entities
})

// Getting entity by key
export const getEntity = (state, collectionName, entityKey) => {
  return pick(state.entities[collectionName], [entityKey])[entityKey]
}

// Reducer for replacing entities
export const createReducer = (collectionNames) => {
  const initialState = reduce(
    collectionNames,
    (acc, collectionName) => assign(acc, { [collectionName]: {} }),
    {}
  )

  return (state = initialState, action) => {
    switch (action.type) {
      case REPLACE_ENTITIES: {
        const { collectionName, entities } = action
        return {
          ...state,
          [collectionName]: {
            ...state[collectionName],
            ...entities
          }
        }
      }

      default:
        return state
    }
  }
}
