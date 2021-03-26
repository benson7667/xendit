import { ofType } from 'redux-observable'
import { of, from, forkJoin } from 'rxjs'
import { catchError, mergeMap } from 'rxjs/operators'
import uniqBy from 'lodash/uniqBy'
import { ActionTypes, Actions } from '../actions/search'
import { searchApi } from '../apis'
import { firestore } from '../utils/firebase'

export const searchEpic = (action$, state$) =>
  action$.pipe(
    ofType(ActionTypes.GET_SEARCH_REQUEST),
    mergeMap((action) => {
      return from(searchApi(action.payload)).pipe(
        mergeMap((searchResults) => {
          const uid = state$.value.auth?.userInfo?.uid

          // remove duplicate
          searchResults = uniqBy(searchResults, 'name')

          // user is not logged in
          if (!uid) {
            const list = searchResults.map((item) => ({ ...item, isFavorite: false }))
            return of(Actions.GET_SEARCH_RESPONSE(list))
          }

          // no search results
          if (!searchResults.length) {
            return of(Actions.GET_SEARCH_RESPONSE([]))
          }

          // has search results and user is logged in; we need to check each item is already added by the user
          const mapped = searchResults.map((item) =>
            firestore().collection('favorites').where('uid', '==', uid).where('name', '==', item.name).get(),
          )

          return forkJoin(mapped).pipe(
            mergeMap((favourites) => {
              const updatedList = searchResults.map((item, index) => {
                if (favourites[index].size > 0) return { ...item, isFavorite: true }
                return { ...item, isFavorite: false }
              })

              return of(Actions.GET_SEARCH_RESPONSE(updatedList))
            }),
          )
        }),
        catchError((error) => of(Actions.GET_SEARCH_ERROR(error))),
      )
    }),
  )
