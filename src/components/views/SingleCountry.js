import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useDebounce } from '../../hooks/index'

import CountrySearchBar from '../CountrySearchBar'
import ViewRadioButtons from '../ViewRadioButtons'
import SingleLineChart from '../views/SingleLineChart'
import RangeSlider from '../RangeSlider'

const SingleCountry = (props) => {
  // console.log(props.selectedCountry)

  const [select, setSelect] = useState('population')
  const [rangeValue, setRangeValue] = useState([1960, 2020])

  const deBouncedRangeValue = ''

  const handleSelectChange = event => {
    const value = event.target.value
    setSelect(value)
  }

  const handleRangeValueChange = (event, newValue) => {
    setRangeValue(newValue)
  }

  let dataset
  switch (select) {
    case 'population':
      dataset = props.selectedCountry.population.map((c, index) => {
        return {
          year: 1960 + index,
          value: c,
        }
      })
      break;
    case 'emissions':
      dataset = dataset = props.selectedCountry.emissions.map((c, index) => {
        return {
          year: 1960 + index,
          value: c,
        }
      })
      break;
    case select === 'per_capita':
      dataset = 'perCapita'
      break;
    default:
      dataset = 'population'
  }
console.log('range value', rangeValue)
console.log('value 1', rangeValue[0])


  const narrowDataset = () => {
    return dataset.slice(rangeValue[0] - 1960, rangeValue[1] - 1960)
  }
  console.log('dataset', dataset)
  
console.log('narrow', narrowDataset())

  return (
    <div style={{ paddingLeft: '20px' }}>
      <h1 style={{ marginBottom: '35px' }}>{props.filter}</h1>
      <div>
        <CountrySearchBar />
        <ViewRadioButtons
          selected={select}
          handleSelectChange={handleSelectChange}
        />
      </div>
      <div>
        <SingleLineChart data={narrowDataset()} />
      </div>
      <div>
        <RangeSlider
          value={rangeValue}
          handleChange={handleRangeValueChange}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedCountry: state.countries.filter(c => c.name === state.filter)[0],
    option: state.options,
    filter: state.filter
  }
}

const ConnectedSingleCountry = connect(mapStateToProps)(SingleCountry)


export default ConnectedSingleCountry