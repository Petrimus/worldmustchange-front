import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  changeListOrder,
  changeListPage,
  changeListSort,
  changeListLimit,
  changeListYear,
} from '../reducers/listPropertiesReducer'

import { debounce } from 'lodash'
// import { useDebounce } from '../hooks'
import { Divider, Segment } from 'semantic-ui-react'

import TopTenRadiobtns from './TopTenRadiobtns'
import SingleSlider from './SingleSlider'
import ListTable from './ListTable'

const Lists = (props) => {
  const { listCountries } = props
  const [sliderValue, setSliderValue] = useState(2000)

  // console.log('slider value ', sliderValue)
  console.log('limit', props.limit)
  console.log(typeof props.limit)
  
  

  const debouncedSliderValue = debounce((value) => {
    setSliderValue(value)
    props.changeListYear(value)
  }, 500)
  // const change = (value) => setSliderValue(value)

  const handleSort = (clickedColumn) => {
    props.changeListSort(clickedColumn)
    props.changeListOrder()
    }
  

  const onChangePage = (event, data) => {
    const { activePage } = data
    if (activePage !== props.page) {
    props.changeListPage(activePage)
    } 
  }

  const onChangeLimit = (event, data) => {
    if (data.value !== props.limit) {
      props.changeListLimit(data.value)
    }
  }

  return (
    <Segment>
      <TopTenRadiobtns />
      <SingleSlider
        value={sliderValue}
        handleChange={debouncedSliderValue}
      />
      <Divider />
      <ListTable
        countries={listCountries}
        totalCount={props.totalCount}
        totalPages={ Math.ceil(props.totalCount / props.limit) }
        currentPage={props.page}
        onChangePage={onChangePage}
        column={props.sort}
        direction='ascending'
        handleSort={handleSort}
        onChangeLimit={onChangeLimit}
        limit={props.limit.toString()}
      />
    </Segment>
  )
}

const listToShow = ({ countries, listProperties }) => {
  let listArray = []
  const indexYear = listProperties.year - 1960
  countries.forEach((country) => {
    // console.log('country ', country)
    const newCountry = { ...country }
    newCountry.population = country.population[indexYear]
    newCountry.emissions = country.emissions[indexYear]
    newCountry.perCapita = country.perCapita[indexYear]
    newCountry.year = 1960 + indexYear
    listArray.push(newCountry)
  })

  if (listProperties.sort === 'population') {
    if (listProperties.order === 'asc') {
      listArray.sort((p1, p2) => { return p1.population - p2.population })
    } else {
      listArray.sort((p1, p2) => { return p2.population - p1.population })
    }
  } else if (listProperties.sort === 'emissions') {
    if (listProperties.order === 'asc') {
      listArray.sort((e1, e2) => { return e1.emissions - e2.emissions })
    } else {
      listArray.sort((p1, p2) => { return p2.emissions - p1.emissions })
    }
  } else if (listProperties.sort === 'perCapita') {
    if (listProperties.order === 'asc') {
      listArray.sort((c1, c2) => { return c1.perCapita - c2.perCapita })
    } else {
      listArray.sort((p1, p2) => { return p2.perCapita - p1.perCapita })
    }
  }
  const slicedListArray = listArray.slice(0, listProperties.limit)

  return slicedListArray
}

const mapStateToProps = (state) => {
  // console.log('state', state)
  return {
    listCountries: listToShow(state),
    limit: state.listProperties.limit,
    totalCount: state.countries.length,
    sort: state.listProperties.sort,
    page: state.listProperties.page
  }
}

const dispatchToProps = {
  changeListOrder,
  changeListPage,
  changeListSort,
  changeListLimit,
  changeListYear
}

export default connect(
  mapStateToProps,
  dispatchToProps
)(Lists)




