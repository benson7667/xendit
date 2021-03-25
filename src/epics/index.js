import { combineEpics } from 'redux-observable'
import * as searchEpics from './searchEpics'
import * as authEpics from './authEpics'

const combineEpicFunctions = (epics) =>
  epics.reduce((arr, epic) => {
    let keys = Object.keys(epic)
    return arr.concat(keys.map((key) => epic[key]))
  }, [])

const epics = combineEpicFunctions([authEpics, searchEpics])

export const rootEpic = combineEpics(...epics)
