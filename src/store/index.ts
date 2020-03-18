import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mainWatchers from './main/watchers'
import countryWatchers from './country/watchers'
import { ApplicationState } from './types'
import combinedReducers from './combinedReducers'

const sagaMiddleware = createSagaMiddleware()
const store: Store<ApplicationState> = createStore(combinedReducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mainWatchers)
sagaMiddleware.run(countryWatchers)

export default store
