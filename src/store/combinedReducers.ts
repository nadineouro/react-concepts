import { combineReducers } from 'redux'

import main from './main/reducers'
import country from './country/reducers'

export default combineReducers({ main, country })
