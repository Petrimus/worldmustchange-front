import React from 'react'
import { connect } from 'react-redux'

import SingleCountry from './views/SingleCountry'

const ViewList = (props) => {
  // console.log(props.countries)

  if (props.option === 'optionOne') {
    return <SingleCountry />
  } else if (props.option === 'optionTwo') {
    return <h1>Option two</h1>
  } else if (props.option === 'optionThree') {
    return <h1>Option three</h1>
  }
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    option: state.options
  }
}

const ConnectedViewList = connect(mapStateToProps)(ViewList)

export default ConnectedViewList