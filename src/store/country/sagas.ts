import { call, put, Effect } from 'redux-saga/effects'
import { CountryConstants } from './types'
import { CountryQuery } from '../../services/country'

function* fetchData(payload: any) {
  yield put({ type: CountryConstants.REDUCER_SET_COUNTRY_DATA, payload })
}

export function* workerGetCountries(action: Effect) {
  try {
    const { params } = action.payload
    const countries = yield call(CountryQuery, params)
    yield call(fetchData, { countries })
  } catch (error) {
    console.log(error)
  }
}
