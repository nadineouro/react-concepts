import { Themes } from '../../store/main/types'

export type Color = {
  light: string
  dark: string
}

export enum Colors {
  grayLight = '#eee',
  grayDark = '#303030',
  accent = '#d25a2c',
  error = '#de2329',
  white = '#fff',
  black = '#000',
}

const colors: { [key: string]: Color } = {
  background: { light: Colors.grayLight, dark: Colors.grayDark },
  primary: { light: Colors.accent, dark: Colors.accent },
  error: { light: Colors.error, dark: Colors.error },
  headerText: { light: Colors.white, dark: Colors.white },
  text: { light: Colors.grayDark, dark: Colors.grayLight },
}

export default (theme: Themes, color: Colors) =>
  theme === Themes.LIGHT ? colors[color].light : colors[color].dark
