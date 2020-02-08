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

const Charts = ({
  changeChartToShow,
  countryFilter,
  option,
  compareFilter,
  showData
}) => {

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
    changeChartToShow(value)
  }

  const resetRange = (event) => {
    console.log('reset range clicked')

    setRangeValue([1960, 2020])
  }
  // console.log('chart render')

  return (
    <div style={{ paddingLeft: '20px', marginLeft: '3em' }}>
      <h1
        style={{ marginBottom: '35px' }}>
        {countryFilter}
        {(option === 'optionTwo' && compareFilter !== null) && ` compared to ${compareFilter}`}
      </h1>
      <div>
        <CountrySearchBar
          target='oneCountry'
          placeholder='select country'
        />
        {
          option === 'optionTwo' &&
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
          filter={countryFilter}
          compare={compareFilter}
          two={option === 'optionTwo'}
          data={showData ?
            showData.slice(debouncedRangeValue[0] - 1960, debouncedRangeValue[1] - 1960) :
            null}
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

const chartdataToShow = (state) => {

  if (state.countries.length === 0) {
    return null
  }

  const selectedCountry = state.countries.filter(c => c.name === state.countryFilter)[0]

  let compareCountry = null
  if (state.compareFilter !== null && state.options === 'optionTwo') {
    compareCountry = state.countries.filter(c => c.name === state.compareFilter)[0]
  }

  let datasetCountry
  switch (state.chartShow) {
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
        datasetCountry = datasetPerCapita(selectedCountry.perCapita)
      } else {
        datasetCountry = datasetPerCapitaWithCompare(selectedCountry.perCapita, compareCountry.perCapita)
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
