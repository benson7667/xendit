import { ActionTypes } from '../actions/search'

const defaultState = {
  isLoadingSearch: false,
  searchResult: [],
  error: null,
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.GET_SEARCH_REQUEST:
      return {
        ...state,
        isLoadingSearch: true,
      }

    case ActionTypes.GET_SEARCH_RESPONSE:
      return {
        ...state,
        isLoadingSearch: false,
        searchResult: [...state.searchResult, ...action.payload],
      }

    case ActionTypes.GET_SEARCH_ERROR:
      return {
        ...state,
        isLoadingSearch: false,
        error: action.error,
      }

    default:
      return state
  }
}

export default userReducer
