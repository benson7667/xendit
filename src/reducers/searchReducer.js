import { ActionTypes } from '../actions/search'

const defaultState = {
  isLoading: false,
  results: [],
  error: null,
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.GET_SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case ActionTypes.GET_SEARCH_RESPONSE:
      return {
        ...state,
        isLoading: false,
        results: action.payload,
      }

    case ActionTypes.GET_SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }

    default:
      return state
  }
}

export default userReducer
