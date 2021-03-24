import { ofType } from 'redux-observable'
import { of, from } from 'rxjs'
import { catchError, mergeMap } from 'rxjs/operators'
import { ActionTypes, Actions } from '../actions/search'
import { searchApi } from '../apis'

export const searchEpic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.GET_SEARCH_REQUEST),
    mergeMap((action) => {
      return from(searchApi(action.payload)).pipe(
        mergeMap((data) => of(Actions.GET_SEARCH_RESPONSE(data))),
        catchError((error) => of(Actions.GET_SEARCH_ERROR(error))),
      )
    }),
  )
