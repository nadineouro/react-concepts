import { all, takeLatest } from 'redux-saga/effects'
import { MainConstants } from './types'
import { workerSetTheme } from './sagas'

export function* watcherSetTheme() {
  yield takeLatest(MainConstants.ACTION_SET_THEME, workerSetTheme)
}

export default function* mainWatchers() {
  yield all([watcherSetTheme()])
}
