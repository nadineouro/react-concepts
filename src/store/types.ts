import { MainStore } from './main/types'
import { CountryStore } from './country/types'

export type ApplicationState = {
  main: MainStore,
  country: CountryStore
}
