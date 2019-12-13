import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'
import userReducer from './user'

const reducer = combineReducers({
  index: indexReducer,
  user: userReducer
})

/**
 * 获取客户端 store
 */
export const getClientStore = () => {
  const defaultStore = window.__context ? window.__context : {}
  return createStore(reducer, defaultStore, applyMiddleware(thunk))
}

/**
 * 获取服务端 store
 */
export const getServerStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}