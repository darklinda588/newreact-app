import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Home from './containers/Home'
import './style/index.less'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './store/reducer/reducers'
let store = createStore(todoApp)
store.subscribe(() =>
  console.log(store.getState())
)
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <App />
        <Route exact path="/" component={Home}/>
      </div>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
