import EasyActions from 'redux-easy-actions'

const { Actions, Constants } = EasyActions({
  GET_ALL_FAVORITE_REQUEST(type, payload) {
    return { type, payload }
  },
  GET_ALL_FAVORITE_RESPONSE(type, payload, error) {
    return { type, payload, error }
  },

  ADD_FAVORITE_REQUEST(type, payload) {
    return { type, payload }
  },
  ADD_FAVORITE_RESPONSE(type, payload, error) {
    return { type, payload, error }
  },

  REMOVE_FAVORITE_REQUEST(type, payload) {
    return { type, payload }
  },
  REMOVE_FAVORITE_RESPONSE(type, payload, error) {
    return { type, payload, error }
  },
})

export { Actions, Constants as ActionTypes }
