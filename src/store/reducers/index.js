const initUrl = ''

function urlReducer(state = initUrl, action) {
  switch (action.type) {
    case 'UPDATE_URL':
      return action.data
    default:
      return state
  }
}


const reducers = combineReducers({
  urlReducer
})

export default reducers
