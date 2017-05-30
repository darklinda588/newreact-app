import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './store/reducer/reducers'
import createBrowserHistory from 'history/createBrowserHistory'
import './style/index.less'

const history = createBrowserHistory()
let store = createStore(todoApp)
// store.subscribe(() =>
//   console.log(store.getState())
// )
console.log(store)
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <App/>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
