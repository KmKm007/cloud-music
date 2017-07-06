import { combineReducers } from 'redux'
import locationReducer from './location'

const reducers = combineReducers({
  location: locationReducer
})

export default reducers
