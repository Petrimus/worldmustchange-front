import React from 'react'

import CountrySearchBar from '../CountrySearchBar'
import ViewRadioButtons from '../ViewRadioButtons'
import SingleLineChart from '../views/SingleLineChart'
import RangeSlider from '../RangeSlider'

const SingleCountry = (props) => {
  const {
    countryName,
    dataTargetChange,
    data,
    selected,
    rangeValue,
    handleRangeValueChange,  
  } = props
  
  
  return (
    <div style={{ paddingLeft: '20px' }}>
      <h1 style={{ marginBottom: '35px' }}>{countryName}</h1>
      <div>
        <CountrySearchBar target='oneCountry'/>
        <ViewRadioButtons
          selected={selected}
          handleDataTargetChange={dataTargetChange}
        />
      </div>
      <div>
        <SingleLineChart data={data} />
      </div>
      <div>
        <RangeSlider
          value={rangeValue}
          handleChange={handleRangeValueChange}
          rangeMin={rangeValue[0]}
          rangeMax={rangeValue[1]}
        />
      </div>
    </div>
  )
}



export default SingleCountry