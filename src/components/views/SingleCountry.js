import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const SingleCountry = (props) => {
  
  return (
  <Fragment>
      <ul>
        {props.countries.map(c => <li key={c.name}>{c.name}</li>)}
      </ul>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    option: state.options
  }
}

const ConnectedSingleCountry = connect(mapStateToProps)(SingleCountry)


export default ConnectedSingleCountry