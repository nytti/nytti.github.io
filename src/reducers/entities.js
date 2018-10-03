import { createReducer } from 'utils/reduxEntities'
import * as entityNames from 'constants/entityNames'

// Creating reducer and initial state based on entity list
export default createReducer(entityNames)
