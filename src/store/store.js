import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import * as reducers from '../reducers/reducers.js'

import { devToolsEnhancer } from 'redux-devtools-extension';

const randoomApp = combineReducers(reducers)
const store = createStore(
    randoomApp,
    devToolsEnhancer(),
    applyMiddleware(thunk)
)

export default store
