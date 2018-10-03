import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { gettersMiddleware } from 'utils/reduxGetters'

import * as reducers from './reducers'

export default (history, ...middlewares) => {
  const createReducer = () => combineReducers({
    router: routerReducer,
    ...reducers,
  })

  const store = createStore(
    createReducer(),
    applyMiddleware(
      thunk,
      routerMiddleware(history),
      gettersMiddleware,
      ...middlewares,
    )
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(createReducer()))
  }

  return store
}
