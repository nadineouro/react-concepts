import gql from 'graphql-tag'
import { CountryQueryParams } from './types'
import API from '..'
import { Country } from '../../store/country/types'
import getFormattedQuery from '../../helpers/getFormattedQuery'

export const CountryQuery = async (params: CountryQueryParams): Promise<Country[] | undefined> => {
  if (!params)
    params = {
      code: true,
      currency: true,
      emoji: true, 
      name: true,
      phone: true
    }
  const QUERY = gql`
    query QUERY {
      countries ${getFormattedQuery(params)}
    }
    `
    try {
    const response = await API.query(QUERY, { ...params })
    console.log(response)
    const { data, errors } = response
    if (!data || errors) console.log(errors)
    return data.countries
  } catch (error) {
    console.log(error)
  }
}

