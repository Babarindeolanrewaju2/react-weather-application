import { combineReducers } from 'redux'
import { FETCH_LOC } from '../actions'

function loc(state = { isFetching: false }, action ) {
  switch (action.type) {
    case FETCH_LOC:
      return { ...state, isFetching: true }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  loc
})
export default rootReducer