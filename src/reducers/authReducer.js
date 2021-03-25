import { ActionTypes } from '../actions/auth'
import storage, { XENDIT_JWT_TOKEN, XENDIT_USER_INFO } from '../utils/storage'

const token = storage.get(XENDIT_JWT_TOKEN)
const userInfo = storage.get(XENDIT_USER_INFO) || {}

const defaultState = {
  isLoading: false,
  isUserAuthenticated: !!token,
  userInfo: { ...JSON.parse(userInfo), token },
  authError: null,
}

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        userInfo: { ...action.payload },
        isUserAuthenticated: !!action?.payload?.token,
      }

    case ActionTypes.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case ActionTypes.REGISTER_RESPONSE: {
      return {
        ...state,
        isLoading: false,
      }
    }

    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case ActionTypes.LOGIN_RESPONSE: {
      return {
        ...state,
        isLoading: false,
      }
    }

    case ActionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case ActionTypes.LOGOUT_RESPONSE:
      return {
        ...defaultState,
        isUserAuthenticated: false,
      }

    case ActionTypes.AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        authError: action.error,
      }

    default:
      return state
  }
}

export default authReducer
