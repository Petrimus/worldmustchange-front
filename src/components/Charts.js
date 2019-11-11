import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useDebounce } from '../hooks'

// import data handling functions from utills
import { datasetPerCapita, datasetPopAndEmis } from '../utills/utilityFunctions'

//import dispatch methods
import { filterChange } from '../reducers/filterReducer'
import {changeChartToShow } from '../reducers/chartShowReducer'

import SingleCountry from './views/SingleCountry'


const Charts = (props) => {
  const [dataTarget, setDataTarget] = useState('population')
  const [rangeValue, setRangeValue] = useState([1960, 2020])

  const debouncedRangeValue = useDebounce(rangeValue, 200)

  const handleRangeValueChange = (event, newValue) => {
    setRangeValue(newValue)
  }
  
  const dataTargetChange = event => {
    const value = event.target.value
    // console.log('value ', value)
    
    setDataTarget(value)
    props.changeChartToShow(value)
  }

  return (
    <div>
     <SingleCountry 
      countryName={props.filter}
      dataTargetChange={dataTargetChange}
      data={props.showData.slice(debouncedRangeValue[0] - 1960, debouncedRangeValue[1] - 1960)} 
      selected={dataTarget}
      rangeValue={rangeValue}
      handleRangeValueChange={handleRangeValueChange}          
      />
  </div>
  )
}

const chartdataToShow = ({
  countries, chartShow, filter, compare,
}) => {
  const selectedCountry = countries.filter(c => c.name === filter)[0]
  // console.log('selectedCountry ', selectedCountry)
  // console.log('filter ', filter)
  
  
  let compareCountry = null
  if (compare !== null) {
    compareCountry = countries.filter(c => c.name === compare)[0]
  }

  let datasetCountry
  switch (chartShow) {
    case 'population':
      datasetCountry = datasetPopAndEmis(selectedCountry.population)
      break;
    case 'emissions':
      datasetCountry = datasetPopAndEmis(selectedCountry.emissions)
      break;
    case 'perCapita':
      datasetCountry = datasetPerCapita(selectedCountry.population, selectedCountry.emissions)
      break;
    default:
      datasetCountry = 'population'
  }
  let datasetCompare
  if (compareCountry !== null) {
    switch (chartShow) {
      case 'population':
        datasetCompare = datasetPopAndEmis(selectedCountry.population)
        break;
      case 'emissions':
        datasetCompare = datasetPopAndEmis(selectedCountry.emissions)
        break;
      case 'perCapita':
        datasetCompare = datasetPerCapita(selectedCountry.population, selectedCountry.emissions)
        break;
      default:
        datasetCompare = 'population'
    }
  }
  if (compareCountry === null) {
    return datasetCountry
  } else {
    return [datasetCountry, datasetCompare]
  }
}

const mapStateToProps = (state) => {
  return {
    showData: chartdataToShow(state),
    filter: state.filter
  }
}

const dispatchToProps = {
  filterChange, changeChartToShow
}

export default connect(
  mapStateToProps,
  dispatchToProps
)(Charts)

