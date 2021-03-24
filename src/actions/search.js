import EasyActions from 'redux-easy-actions'

const { Actions, Constants } = EasyActions({
  GET_SEARCH_REQUEST(type, payload) {
    return { type, payload }
  },
  GET_SEARCH_RESPONSE(type, payload) {
    return { type, payload }
  },
  GET_SEARCH_ERROR(type, error) {
    return { type, error }
  },
})

export { Actions, Constants as ActionTypes }
