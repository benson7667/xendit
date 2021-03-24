import { combineEpics } from 'redux-observable'
import * as searchEpics from './searchEpics'

const combineEpicFunctions = (epics) =>
  epics.reduce((arr, epic) => {
    let keys = Object.keys(epic)
    return arr.concat(keys.map((key) => epic[key]))
  }, [])

const epics = combineEpicFunctions([searchEpics])

export const rootEpic = combineEpics(...epics)
