export type MainStore = {
  theme: Themes
}

export enum Themes {
  LIGHT = 'light',
  DARK = 'dark'
}

export enum MainConstants {
  REDUCER_SET_MAIN_DATA = 'REDUCER_SET_MAIN_DATA',
  ACTION_SET_THEME = 'ACTION_SET_THEME',
}
