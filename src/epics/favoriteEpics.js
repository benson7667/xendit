import { ofType } from 'redux-observable'
import { of, from, forkJoin } from 'rxjs'
import { catchError, switchMap, mergeMap } from 'rxjs/operators'
import { Actions, ActionTypes } from '../actions/favorite'
import { firestore } from '../utils/firebase'

export const getAllFavoriteEpic = (action$, state$) =>
  action$.pipe(
    ofType(ActionTypes.GET_ALL_FAVORITE_REQUEST),
    mergeMap(() => {
      const uid = state$.value.auth?.userInfo?.uid || ''
      const token = state$.value.auth?.userInfo?.token || ''

      if (!uid || !token) return of(Actions.GET_ALL_FAVORITE_RESPONSE([], null))

      const getAllFavoriteFunc = firestore()
        .collection('favorites')
        .where('uid', '==', uid)
        .get()
        .then((snapshot) => snapshot.docs)

      return from(getAllFavoriteFunc).pipe(
        mergeMap((docs) => {
          const list = docs.map((doc) => ({ ...doc.data(), isFavorite: true }))
          return of(Actions.GET_ALL_FAVORITE_RESPONSE(list, null))
        }),
        catchError((error) => of(Actions.GET_ALL_FAVORITE_RESPONSE([], error))),
      )
    }),
  )

export const addFavoriteEpic = (action$, state$) =>
  action$.pipe(
    ofType(ActionTypes.ADD_FAVORITE_REQUEST),
    switchMap((action) => {
      // user must be logged in before adding item to favorite list
      const uid = state$.value.auth?.userInfo?.uid || ''
      const token = state$.value.auth?.userInfo?.token || ''

      if (!uid || !token) return from([])

      const dataToSave = { uid, ...action.payload }
      const addFavoriteFunc = firestore().collection('favorites').add(dataToSave)

      return from(addFavoriteFunc).pipe(
        switchMap(() => of(Actions.ADD_FAVORITE_RESPONSE({}, null))),
        catchError((error) => of(Actions.ADD_FAVORITE_RESPONSE({}, error))),
      )
    }),
  )

export const removeFavoriteEpic = (action$, state$) =>
  action$.pipe(
    ofType(ActionTypes.REMOVE_FAVORITE_REQUEST),
    switchMap((action) => {
      // user must be logged to perform remove favorite item
      const uid = state$.value.auth?.userInfo?.uid || ''
      const token = state$.value.auth?.userInfo?.token || ''

      if (!uid || !token) return from([])

      // const dataToSave = { uid, ...action.payload }
      const getFavoriteIdFunc = firestore()
        .collection('favorites')
        .where('uid', '==', uid)
        .where('name', '==', action.payload.name)
        .get()

      return from(getFavoriteIdFunc).pipe(
        mergeMap((favorites) => {
          const deletePromises = []
          favorites.forEach((item) => {
            deletePromises.push(firestore().collection('favorites').doc(item.id).delete())
          })
          return forkJoin(deletePromises).pipe(
            mergeMap(() => of(Actions.REMOVE_FAVORITE_RESPONSE({}, null))),
            catchError((err) => of(Actions.REMOVE_FAVORITE_RESPONSE({}, err))),
          )
        }),
      )
    }),
  )
