import { Themes, MainConstants } from './types'

export const setTheme = (theme: Themes) => (
  { type: MainConstants.ACTION_SET_THEME, payload: { theme } }
)