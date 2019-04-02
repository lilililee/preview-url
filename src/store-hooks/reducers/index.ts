import TYPES from '../types'

export const initState: object = {
  url: 'https://weui.io/'
}

export function reducers(state, action) {
  console.log(state)
  switch (action.type) {
    case TYPES.URL:
      return {
        ...state,
        url: action.data
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
