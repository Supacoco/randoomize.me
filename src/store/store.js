import { createStore, combineReducers } from 'redux'
import * as reducers from '../reducers/reducers.js'

const randoomApp = combineReducers(reducers)
const store = createStore(randoomApp)

export default store

// Parametre generateur
  // type (uniform|gaussian) 
  // nombre de point
  // type generateur
  // sequence
  // seed

// Draw reducer
  // viewBox
  // dot size
  // dot color
  // width
  // height