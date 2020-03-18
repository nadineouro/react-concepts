import { Reducer } from 'redux'
import { CountryStore, CountryConstants } from './types'

const INITIAL_STATE: CountryStore = { countries: [] }

const reducer: Reducer<CountryStore> = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case CountryConstants.REDUCER_SET_COUNTRY_DATA: 
      return { ...state, ...action.payload }
    default:
      return state
  }
}
export default reducer
