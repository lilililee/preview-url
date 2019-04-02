import TYPES from '../types'

export const initState = {
  url: 'https://weui.io/',
  size: {
    width: 375,
    height: 667
  }
}

export function reducers(state, action) {
  switch (action.type) {
    case TYPES.URL:
      return {
        ...state,
        url: action.data
      }
    case TYPES.SIZE:
      return {
        ...state,
        size: action.data
      }

    default:
      return state
  }
}

// export default {
//   initState,
//   reducers
// }

// let state = {
//   url: ''
// }

// function urlReducer(state, action) {
//   switch (action.type) {
//     case 'UPDATE_URL':
//       state = {
//         ...state,
//         url: action.data
//       }
//       return state = {

//     default:
//       return state
//   }
// }
