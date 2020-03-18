import { all, takeLatest } from 'redux-saga/effects'
import { CountryConstants } from './types'
import { workerGetCountries } from './sagas'

export function* watcherGetCountries() {
  yield takeLatest(CountryConstants.ACTION_GET_COUNTRIES, workerGetCountries)
}

export default function* mainWatchers() {
  yield all([watcherGetCountries()])
}
