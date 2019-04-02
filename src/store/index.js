import { createStore } from 'redux'
import  reducers from './reducers/index.js'

const store = createStore(reducers)
console.log(store)
export default store