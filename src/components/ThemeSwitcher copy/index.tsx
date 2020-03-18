import React, { Component } from 'react'
import { Props } from './types'
import Switch from 'react-switch'
import { Themes } from '../../store/main/types'
import { ApplicationState } from '../../store/types'
import { setTheme } from '../../store/main/actions'
import { Colors } from '../../styles/variables/colors'
import './styles.scss'
import { WbSunny, Brightness2 } from '@material-ui/icons';
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'

class ThemeSwitcher extends Component<Props> {
  constructor(props: Props) {
    super(props)
    this.handleTheme = this.handleTheme.bind(this)
  }

  handleTheme = () => {
    if (this.props.theme === Themes.DARK) this.props.setTheme(Themes.LIGHT)
    else this.props.setTheme(Themes.DARK)
  }

  render() {
    const { theme } = this.props
    return (
      <div className='theme-switcher'>
      <WbSunny color='inherit' />
      <Switch 
        className='switch'
        checked={theme === Themes.DARK ? true : false}
        onChange={this.handleTheme}
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

}

const mapStateToProps = (state: ApplicationState) => ({
  theme: state.main.theme
})

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    setTheme
  }, dispatch)
  
export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher)
