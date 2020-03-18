import React from 'react'
import { Props } from './types'
import Switch from 'react-switch'
import { Themes } from '../../store/main/types'
import { useSelector, useDispatch } from 'react-redux'
import { ApplicationState } from '../../store/types'
import { setTheme } from '../../store/main/actions'
import { Colors } from '../../styles/variables/colors'
import './styles.scss'
import { WbSunny, Brightness2 } from '@material-ui/icons';

const ThemeSwitcher: React.FC<Props> = () => {
  const { theme } = useSelector((state: ApplicationState) => state.main)
  const dispatch = useDispatch()

  const handleTheme = () => {
    if (theme === Themes.DARK) dispatch(setTheme(Themes.LIGHT))
    else dispatch(setTheme(Themes.DARK))
  }
  return (
    <div className='theme-switcher'>
      <WbSunny color='inherit' />
      <Switch 
        className='switch'
        checked={theme === Themes.DARK ? true : false}
        onChange={handleTheme}
        onColor={Colors.grayDark}
        uncheckedIcon={false}
        checkedIcon={false}
        height={25}
        width={50}
        activeBoxShadow={`0 0 2px 3px ${Colors.white}`}
        />
      <Brightness2 color='inherit' />
    </div>
  )
}
export default ThemeSwitcher