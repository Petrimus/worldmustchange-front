import React, { useState } from 'react'

import { debounce } from 'lodash'
// import { useDebounce } from '../hooks'

import TopTenRadiobtns from './TopTenRadiobtns'
import SingleSlider from './SingleSlider'

const Lists = () => {
  const [sliderValue, setSliderValue] = useState(2000)
console.log('slider value ', sliderValue)

  const debouncedSliderValue = debounce(value => setSliderValue(value), 300)
  // const change = (value) => setSliderValue(value)
return (
    <div>
      These are lists
    <TopTenRadiobtns />
      <SingleSlider
        value={sliderValue}
        handleChange={debouncedSliderValue}
      />
    </div>
  )
}

export default Lists

