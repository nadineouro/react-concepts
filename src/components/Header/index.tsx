import React from 'react';
import { Props } from './types';
import './styles.scss';
import ThemeSwitcher from '../ThemeSwitcher'
import { withRouter } from 'react-router-dom'

const Header: React.FC<Props> = ({ history }) => {
  return(
    <div className='header'>
      <button onClick={() => history.push('/')}>
        React Concepts
      </button>
      <ThemeSwitcher />
    </div>
  )
}
export default withRouter(Header)