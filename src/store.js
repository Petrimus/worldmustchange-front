import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import countryReducer from './reducers/countryReducer'
import optionReducer from './reducers/optionReducer'
import countryFilterReducer from './reducers/countryFilterReducer'
import compareFilterReducer from './reducers/compareFilterReducer'
import chartShowReducer from './reducers/chartShowReducer'


const reducer = combineReducers({
  countries: countryReducer,
  options: optionReducer,
  countryFilter: countryFilterReducer,
  compareFilter: compareFilterReducer,
  chartShow: chartShowReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store