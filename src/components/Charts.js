import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useDebounce } from '../hooks'
import styled from 'styled-components'

// import data handling functions from utills
import {
  datasetPerCapita,
  datasetPopAndEmis,
  datasetPopAndEmisWithCompare,
  datasetPerCapitaWithCompare
} from '../utills/utilityFunctions'

//import dispatch methods
import { filterChange } from '../reducers/countryFilterReducer'
import { changeChartToShow } from '../reducers/chartShowReducer'

import CountrySearchBar from './CountrySearchBar'
import ViewRadioButtons from './ViewRadioButtons'
import SingleLineChart from './views/SingleLineChart'
import RangeSlider from './RangeSlider'
import Button from './utills/Button'

const RangeWrapper = styled.div`
    display: flex;
    margin-top: 1em; 
    align-items: center;   
  `

const Charts = (props) => {

  const [dataTarget, setDataTarget] = useState('population')
  const [rangeValue, setRangeValue] = useState([1960, 2020])
  const debouncedRangeValue = useDebounce(rangeValue, 500)
  
  const handleRangeValueChange = (event, newValue) => {
    // console.log('new value ', newValue)
    setRangeValue(newValue)
  }

  const dataTargetChange = event => {
    const value = event.target.value
    // console.log('value ', value)    
    setDataTarget(value)
    props.changeChartToShow(value)
  }

  const resetRange = (event) => {
    console.log('reset range clicked')

    setRangeValue([1960, 2020])
  }
console.log('chart render')

  return (
    <div style={{ paddingLeft: '20px', marginLeft: '3em' }}>
      <h1
        style={{ marginBottom: '35px' }}>
        {props.countryFilter}
        {(props.option === 'optionTwo' && props.compareFilter !== null) && ` compared to ${props.compareFilter}`}
      </h1>
      <div>
        <CountrySearchBar
          target='oneCountry'
          placeholder='select country'
        />
        {
          props.option === 'optionTwo' &&
          <CountrySearchBar
            target='compare'
            placeholder='Compare to another country'
          />
        }
        <ViewRadioButtons
          selected={dataTarget}
          handleDataTargetChange={dataTargetChange}
        />
      </div>
      <div>
        <SingleLineChart
          filter={props.countryFilter}
          compare={props.compareFilter}
          two={props.option === 'optionTwo'}
          data={props.showData ? 
            props.showData.slice(debouncedRangeValue[0] - 1960, debouncedRangeValue[1] - 1960) :
            null }           
            />
      </div>
      <RangeWrapper>
        <RangeSlider
          value={rangeValue}
          handleChange={handleRangeValueChange}
        />
        <Button text="reset" handleButtonClick={resetRange} />
      </RangeWrapper>
    </div>
  )
}

const chartdataToShow = ({
  countries, chartShow, countryFilter, compareFilter, options
}) => {
  // console.log('compareFilter ', compareFilter)
  // console.log('option ', options)
  if (countries.length === 0) {
    return
  }

  const selectedCountry = countries.filter(c => c.name === countryFilter)[0]

  let compareCountry = null
  if (compareFilter !== null && options === 'optionTwo') {
    compareCountry = countries.filter(c => c.name === compareFilter)[0]
  }

  let datasetCountry
  switch (chartShow) {
    case 'population':
      if (compareCountry === null) {
        datasetCountry = datasetPopAndEmis(selectedCountry.population)
      } else {
        datasetCountry = datasetPopAndEmisWithCompare(selectedCountry.population, compareCountry.population)
      }
      break;
    case 'emissions':
      if (compareCountry === null) {
        datasetCountry = datasetPopAndEmis(selectedCountry.emissions)
      } else {
        datasetCountry = datasetPopAndEmisWithCompare(selectedCountry.emissions, compareCountry.emissions)
      }
      break;
    case 'perCapita':
      if (compareCountry === null) {
        datasetCountry = datasetPerCapita(selectedCountry.population, selectedCountry.emissions)
      } else {
        datasetCountry = datasetPerCapitaWithCompare(
          selectedCountry.population, selectedCountry.emissions, compareCountry.population, compareCountry.emissions)
      }     
      break;
    default:
      datasetCountry = 'population'
  }
  return datasetCountry
}

const mapStateToProps = (state) => {
  return {
    showData: chartdataToShow(state),
    countryFilter: state.countryFilter,
    option: state.options,
    compareFilter: state.compareFilter
  }
}

const dispatchToProps = {
  filterChange, changeChartToShow
}

export default connect(
  mapStateToProps,
  dispatchToProps
)(Charts)


/*
 <Button text="reset" handleButtonClick={resetRange}/>
*/
