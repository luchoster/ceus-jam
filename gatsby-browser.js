import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'

import Reducers from './src/state/reducers/'

const store = createStore(Reducers, applyMiddleware(Thunk))

export const replaceRouterComponent = ({ history }) => {
  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}
