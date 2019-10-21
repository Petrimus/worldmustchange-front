import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import countryReducer from './reducers/countryReducer'
import optionReducer from './reducers/optionReducer'

const reducer = combineReducers({
  countries: countryReducer,
  options: optionReducer
})

const store = createStore(reducer, composeWithDevTools())
// console.log('store', store)
console.log('state', store.getState())


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

