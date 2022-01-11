import { applyMiddleware, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import { reducers } from './reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
  applyMiddleware(reduxThunk)
)

export const store = createStore(
  reducers,
  enhancer
)
