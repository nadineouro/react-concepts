import { CountryConstants } from './types'
import { CountryQueryParams } from '../../services/country/types'

export const getCountries = (params?: CountryQueryParams) => (
  { type: CountryConstants.ACTION_GET_COUNTRIES, payload: { params } }
)