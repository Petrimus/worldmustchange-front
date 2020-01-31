import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/countryFilterReducer'
import { compareChange } from '../reducers/compareFilterReducer'

// styles
import { 
  ListWrapper, 
  SearchListItem,
  SearchInput,
  SearchFieldWrapper,
  SearchList,
  SearchForm,
  StyledInputField
} from './styles/styledSearchBar'

const CountrySearchBar = (props) => {
  const { target, placeholder } = props
  const [inputValue, setInputValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const node = useRef();

  const handleClick = e => {
    if (node.current.contains(e.target)) {     
      return
    }   
    setInputValue('')
    setIsOpen(false);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    }
  }, [])


  const handleInputValueChange = (event) => {
    if (event.target.value.length > 0) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
    setInputValue(event.target.value)
  }

  const filterCountries = () => {
    const filtered = props.countries.filter((country) => {
      return country.name.toLowerCase().includes(inputValue.toLowerCase())
    })
    return filtered
  }

  const handleSelectClick = (value) => {
    setIsOpen(false)
    setInputValue('')
    target === 'oneCountry' ? props.filterChange(value) : props.compareChange(value)
  }

  return (
    <SearchFieldWrapper ref={node}>
      <SearchForm>
        <StyledInputField
          type="text"
          value={inputValue}
          onChange={handleInputValueChange}
          placeholder={placeholder}
        />
      </SearchForm>
      {
        isOpen > 0 &&
        <DropDown options={filterCountries()} clickHandler={handleSelectClick} />
      }
    </SearchFieldWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    filter: state.filter
  }
}
const mapDispatchToProps = { filterChange, compareChange }

const ConnectedCountrySearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
  )(CountrySearchBar)

export default ConnectedCountrySearchBar

const DropDown = ({ options, clickHandler }) => {
  //console.log(countries
  let view

  if (options.length === 0) {
    view = <p style={{ padding: '12px' }}>No matches found</p>
  } else if (options.length <= 5 && options.length > 0) {
    view = <SearchList>
      { 
        options.map(c =>
          <SearchListItem key={c.name} onClick={() => clickHandler(c.name)}>
            {c.name}
          </SearchListItem>)
      }
      </SearchList>    
  } else if (options.length > 5) {
    view = <p style={{ padding: '12px' }}>Too many results. Narrow search</p>
  }
  // console.log(view)

  return (
    <ListWrapper>
      {view}
    </ListWrapper>
  )
}

