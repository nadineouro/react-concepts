export type Country = {
  code: string
  name?: string
  native?: string
  phone?: string
  continent?: Continent
  currency?: string
  languages?: Language[]
  emoji?: string
  emojiU?: string
  states?: State[]
}

export type CountryStore = {
  countries: Country[]
}

export type Continent = {
  code?: string
  name?: string
  countries?: Country[]
}

export type Language = {
  code?: string
  name?: string
  native?: string
  rtl?: number
}

export type State = {
  code?: string
  name?: string
  country?: Country[]
}

export enum CountryConstants {
  REDUCER_SET_COUNTRY_DATA = 'REDUCER_SET_COUNTRY_DATA',
  ACTION_GET_COUNTRIES = 'ACTION_GET_COUNTRIES'
}
