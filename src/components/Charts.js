import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useDebounce } from '../hooks'
import styled from 'styled-components'

// import data handling functions from utills
import {
  datasetPerCapita,
  datasetPopAndEmis,
  datasetPopAndEmisWithCompare,
} from '../utills/utilityFunctions'

//import dispatch methods
import { filterChange } from '../reducers/filterReducer'
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
    console.log('new value ', newValue)
    
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

  return (
    <div style={{ paddingLeft: '20px' }}>
      <h1
        style={{ marginBottom: '35px' }}>
        {props.filter}
        {(props.option === 'optionTwo' && props.compare !== null) && ` compared to ${props.compare}`}
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
          filter={props.filter}
          compare={props.compare}
          two={props.option === 'optionTwo'}
          data={props.showData.slice(debouncedRangeValue[0] - 1960, debouncedRangeValue[1] - 1960)} />
      </div>      
        <RangeWrapper>
          <RangeSlider
            value={rangeValue}
            handleChange={handleRangeValueChange}           
          />
           <Button text="reset" handleButtonClick={resetRange}/>
        </RangeWrapper>
    </div>
  )
}

const chartdataToShow = ({
  countries, chartShow, filter, compare,
}) => {
  const selectedCountry = countries.filter(c => c.name === filter)[0]

  let compareCountry
  if (compare !== null) {
    compareCountry = countries.filter(c => c.name === compare)[0]
  }

  let datasetCountry
  switch (chartShow) {
    case 'population':
      if (compare === null) {
        datasetCountry = datasetPopAndEmis(selectedCountry.population)
      } else {
        datasetCountry = datasetPopAndEmisWithCompare(selectedCountry.population, compareCountry.population)
      }
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
  return datasetCountry
}

const mapStateToProps = (state) => {
  return {
    showData: chartdataToShow(state),
    filter: state.filter,
    option: state.options,
    compare: state.compare
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
