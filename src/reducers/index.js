import { combineReducers } from 'redux'
import searchReducer from './searchReducer.js'
import authReducer from './authReducer'

const reducers = combineReducers({
  search: searchReducer,
  auth: authReducer,
})

export default reducers
