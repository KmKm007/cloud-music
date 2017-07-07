import { combineReducers } from 'redux'
import locationReducer from './location'
import counterReducer from './counter'
import playerReducer from './player'

const reducers = combineReducers({
  location: locationReducer,
  counter: counterReducer,
  player: playerReducer
})

export default reducers
