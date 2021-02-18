import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import Notification from './containers/Notifications'

import App from './containers/App'
import history from './history'
import store from './store'

import './assets/sass/main.sass'
import "./assets/slick/slick.min.css"
import "./assets/slick/slick-theme.min.css"
import 'react-quill/dist/quill.snow.css'

export default function () {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App />
        <Notification style={{ 'z-index': 9999 }} />
      </Router>
    </Provider>
  )
}
