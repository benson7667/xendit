import EasyActions from 'redux-easy-actions'

const { Actions, Constants } = EasyActions({
  // set auth user
  SET_USER(type, payload) {
    return { type, payload }
  },

  // register
  REGISTER_REQUEST(type, payload) {
    return { type, payload }
  },
  REGISTER_RESPONSE(type) {
    return { type }
  },

  // login
  LOGIN_REQUEST(type, payload) {
    return { type, payload }
  },
  LOGIN_RESPONSE(type) {
    return { type }
  },

  // logout
  LOGOUT_REQUEST(type) {
    return { type }
  },
  LOGOUT_RESPONSE(type) {
    return { type }
  },

  // error
  AUTH_ERROR(type, error) {
    return { type, error }
  },
})

export { Actions, Constants as ActionTypes }
