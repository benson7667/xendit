import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'

import { rootEpic } from './epics'
import reducers from './reducers'

const IS_DEVELOP = process.env.NODE_ENV !== 'production'

const logger = createLogger({
  collapsed: false,
})

const epicMiddleware = createEpicMiddleware()

const middlewares = IS_DEVELOP ? [logger, epicMiddleware] : [epicMiddleware]

const store = createStore(reducers, applyMiddleware(...middlewares))

epicMiddleware.run(rootEpic)

export default store
