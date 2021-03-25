import { combineReducers } from 'redux'
import searchReducer from './searchReducer.js'
import authReducer from './authReducer'
import favoriteReducer from './favorite'

const reducers = combineReducers({
  auth: authReducer,
  favorites: favoriteReducer,
  search: searchReducer,
})

export default reducers
