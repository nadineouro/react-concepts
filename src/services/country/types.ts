
export type CountryQueryParams = {
  code?: boolean
  name?: boolean
  native?: boolean
  phone?: boolean
  continent?: ContinentQueryParams
  currency?: boolean
  languages?: LanguageQueryParams
  emoji?: boolean
  emojiU?: boolean
  states?: StateQueryParams
}

type ContinentQueryParams = {
  code?: boolean
  name?: boolean
  countries?: CountryQueryParams
}

type LanguageQueryParams = {
  code?: boolean
  name?: boolean
  native?: boolean
  rtl?: boolean
}

type StateQueryParams = {
  code?: boolean
  name?: boolean
  country?: CountryQueryParams
}