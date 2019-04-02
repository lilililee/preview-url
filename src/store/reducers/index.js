import { combineReducers } from 'redux'
import TYPES from '../types'


const initUrl = ''

function urlReducer(state = initUrl, action) {
  switch (action.type) {
    case TYPES.url:
      return action.data
    default:
      return state
  }
}

const reducers = combineReducers({
  urlReducer
})

export default reducers
