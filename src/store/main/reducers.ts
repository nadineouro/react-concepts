import { Reducer } from 'redux'
import { MainStore, MainConstants, Themes } from './types'

const INITIAL_STATE: MainStore = { theme: Themes.LIGHT }

const reducer: Reducer<MainStore> = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case MainConstants.REDUCER_SET_MAIN_DATA: 
      return { ...state, ...action.payload }
    case MainConstants.ACTION_SET_THEME:
      return { ...state, defaultTheme: action.payload.theme }
    default:
      return state
  }
}

export default reducer
