import React from 'react'
import {
  BrowserRouter as Router,
  Route, /* Link, Redirect, withRouter */
} from 'react-router-dom'

// import components
import Home from './components/Home'


const App = () => {

  return (
  <div>
    <Router>
      <Route path="/" render={() => <Home />} />
    </Router>
  </div>
  )
}
export default App
