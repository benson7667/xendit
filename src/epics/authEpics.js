import { ofType } from 'redux-observable'
import { of, from } from 'rxjs'
import { catchError, mergeMap } from 'rxjs/operators'
import { Actions, ActionTypes } from '../actions/auth'
import { userLogin, userLogout, userRegister } from '../utils/firebase'
import storage, { XENDIT_JWT_TOKEN, XENDIT_USER_INFO } from '../utils/storage'

export const setUserEpic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.SET_USER),
    mergeMap((action) => {
      const { token, ...restUserInfo } = action.payload
      if (token) {
        storage.set(XENDIT_JWT_TOKEN, token)
        storage.set(XENDIT_USER_INFO, JSON.stringify(restUserInfo))
      } else {
        storage.remove(XENDIT_JWT_TOKEN)
        storage.remove(XENDIT_USER_INFO)
      }

      return from([])
    }),
  )

export const registerEpic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.REGISTER_REQUEST),
    mergeMap((action) => {
      const { email, password } = action.payload
      return from(userRegister(email, password)).pipe(
        mergeMap(() => of(Actions.REGISTER_RESPONSE())),
        catchError((error) => of(Actions.AUTH_ERROR(error))),
      )
    }),
  )

export const loginEpic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.LOGIN_REQUEST),
    mergeMap((action) => {
      const { email, password } = action.payload
      return from(userLogin(email, password)).pipe(
        mergeMap(() => of(Actions.LOGIN_RESPONSE())),
        catchError((error) => of(Actions.AUTH_ERROR(error))),
      )
    }),
  )

export const logoutEpic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.LOGOUT_REQUEST),
    mergeMap(() =>
      from(userLogout()).pipe(
        mergeMap(() => of(Actions.LOGOUT_RESPONSE())),
        catchError((error) => of(Actions.AUTH_ERROR(error))),
      ),
    ),
  )
