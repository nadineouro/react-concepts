import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'
import './styles/index.scss'
import './styles/reset.scss'
import App from './Router'

const Container = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Container />, document.getElementById('root'))
