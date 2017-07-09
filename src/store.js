import { applyMiddleware, createStore } from "redux"

import { logger } from 'redux-logger'
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import { routerMiddleware } from 'react-router-redux'

import reducer from "./reducers"

import { history } from './utils/history'

const middleware = applyMiddleware(promise(), thunk, logger, routerMiddleware(history))

export default createStore(reducer, middleware)
