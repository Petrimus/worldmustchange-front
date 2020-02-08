import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  changeListOrd,
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

  const debouncedSliderValue = debounce((value) => {
    setSliderValue(value)
    props.changeListYear(value)
  }, 300)
  // const change = (value) => setSliderValue(value)

  const handleSort = (clickedColumn) => {
    const { _sort, _order } = this.state;

    let newOrder = _order === 'asc' ? 'desc' : 'asc';
    if (_sort !== clickedColumn) {
      newOrder = 'asc';
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
        totalCount={listCountries.length}
        totalPages={Math.ceil(this.state.totalCount / this.state._limit)}
        currentPage={page}
        onChangePage={this.onChangePage}
        column={sort}
        direction={directionConverter(order)}
        handleSort={this.handleSort}
        onChangeLimit={this.onChangeLimit}
        limit={limit.toString()}
      />
    </Segment>
  )
}

const listToShow = ({ countries, listProperties }) => {
  let listArray = []
  const year = listProperties.year - 1960
  countries.forEach(country => {
    country.population = country.population[year]
    country.emissions = country.emissions[year]
    country.perCapita = country.percapita[year]
    country.year = year
    listArray.push(country)
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
  return {
    listCountries: listToShow(state)
  }
}

const dispatchToProps = {
  changeListOrd,
  changeListPage,
  changeListSort,
  changeListLimit,
  changeListYear
}

export default connect(
  mapStateToProps,
  dispatchToProps
)(Lists)




