import React, { useState, useReducer } from 'react'
import ReactDOM from 'react-dom'
import './styles/common.scss'
import App from './pages/home/index'
// import { Provider } from 'react-redux'
// import store from './store/index.js'
import Context from './store-hooks/index'
import { initState, reducers } from './store-hooks/reducers/index'


const AppWithContext = (props: any) => {
  const [state, dispatch] = useReducer(reducers, initState)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <App />
    </Context.Provider>
  )
}

ReactDOM.render(<AppWithContext />, document.getElementById('app'))

