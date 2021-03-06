import { ActionTypes } from '../actions/favorite'

const defaultState = {
  // GET_ALL
  isLoadingGetAllFavorite: false,
  favoriteList: [],
  getAllFavoriteError: null,

  // ADD
  isAddingFavorite: false,
  addFavoriteError: null,

  // REMOVE
  isRemovingFavorite: false,
  removeFavoriteError: null,
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    // GET_ALL
    case ActionTypes.GET_ALL_FAVORITE_REQUEST:
      return {
        ...state,
        isLoadingGetAllFavorite: true,
        getAllFavoriteError: null,
      }

    case ActionTypes.GET_ALL_FAVORITE_RESPONSE:
      return {
        ...state,
        isLoadingGetAllFavorite: false,
        favoriteList: action.error ? defaultState.favoriteList : action.payload,
        getAllFavoriteError: action.error,
      }

    // ADD
    case ActionTypes.ADD_FAVORITE_REQUEST:
      return {
        ...state,
        isAddingFavorite: true,
      }

    case ActionTypes.ADD_FAVORITE_RESPONSE:
      return {
        ...state,
        isAddingFavorite: false,
        addFavoriteError: action.error,
      }

    // REMOVE
    case ActionTypes.REMOVE_FAVORITE_REQUEST:
      return {
        ...state,
        isRemovingFavorite: true,
        removeFavoriteError: null,
      }

    case ActionTypes.REMOVE_FAVORITE_RESPONSE:
      return {
        ...state,
        isRemovingFavorite: false,
        removeFavoriteError: action.error,
      }

    default:
      return state
  }
}

export default userReducer
