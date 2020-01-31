import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route, /* Link, Redirect, withRouter */
} from 'react-router-dom'

import { initializeCountries } from './reducers/countryReducer'

// import components
import Home from './components/Home'


const App = (props) => {
  const { initializeCountries } = props

  useEffect(() => {
    console.log('effect')    
    initializeCountries()   
  }, [initializeCountries])

  // console.log('render')
  
  return (
  <div>
    <Router>
      <Route path="/" render={() => <Home />} />
    </Router>
  </div>
  )
}

export default connect(
  null, { initializeCountries }
)(App)