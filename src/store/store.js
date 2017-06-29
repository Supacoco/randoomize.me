import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import * as reducers from '../reducers/reducers.js'

const middlewares = [thunk]
const composeEnhancers = composeWithDevTools({})

const randoomApp = combineReducers(reducers)
const store = createStore(randoomApp, composeEnhancers(
    applyMiddleware(...middlewares)
))

export default store
