import { call, put, Effect } from 'redux-saga/effects'
import { MainConstants } from './types'

function* fetchData(payload: any) {
  yield put({ type: MainConstants.REDUCER_SET_MAIN_DATA, payload })
}

export function* workerSetTheme(action: Effect) {
  try {
    const { theme } = action.payload
    yield put({ type: MainConstants.REDUCER_SET_MAIN_DATA, payload: { theme } })
    yield call(fetchData, { theme })
  } catch (error) {
    console.log(error)
  }
}
