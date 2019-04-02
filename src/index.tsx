import React, { useState, useReducer } from 'react'
import ReactDOM from 'react-dom'
import './styles/common.scss'
import App from './pages/home/index'
// import { Provider } from 'react-redux'
// import store from './store/index.js'

import { initState, reducers } from './store-hooks/reducers/index'

const ctx:any = {}
const Context = React.createContext(ctx)
export default Context
// const initUrl = 'http://www.baidu.com'

const AppWithContext = (props: any) => {
  const [state, dispatch] = useReducer(reducers, initState)
  console.log(state)
  console.log(dispatch)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <App />
    </Context.Provider>
  )
}

ReactDOM.render(<AppWithContext />, document.getElementById('app'))

