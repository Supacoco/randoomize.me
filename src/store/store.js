import { createStore, combineReducers } from 'redux'
import * as reducers from '../reducers/reducers.js'

import { devToolsEnhancer } from 'redux-devtools-extension';

const randoomApp = combineReducers(reducers)
const store = createStore(randoomApp, devToolsEnhancer())

export default store
