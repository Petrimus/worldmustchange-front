import React, { useState } from 'react'
import { connect } from 'react-redux'
import { optionChange } from '../reducers/optionReducer'

// import styles
import {
  OptionsContainer,
  OptionTitle,  
  OptionItem,
  OptionList,
  OptionRadioLabel,
  OptionRadioButton,
  Check,
  CheckMarked
} from '../components/styles/styledOptions'

const Options = (props) => {
  const [select, setSelect] = useState('optionOne')
  const handleOptionChange = event => {
    //console.log(select)
    const value = event.target.value
    // console.log(select === "optionOne")
    props.optionChange(value)
    setSelect(value)
  }

  const selectPositions = () => {
    const pos = {
      posOne: { y: '-50px', x: '-83px' },
      posTwo: { y: '-50px', x: '-25px' },
      posThree: { y: '-50px', x: '33px' }
    }

    if (select === 'optionOne') {
      return pos.posOne
    } else if (select === 'optionTwo') {
      return pos.posTwo
    } else {
      return pos.posThree
    }
  }

  // console.log(selectPositions())

  return (
    <OptionsContainer>
 
        <OptionTitle>Menu</OptionTitle>
        <OptionList>
          <OptionItem>
            <OptionRadioButton
              type="radio"
              name="options"
              className="op1"
              value="optionOne"
              id="one"
              checked={select === "optionOne"}
              onChange={event => handleOptionChange(event)}
            />
            <OptionRadioLabel htmlFor="one">Single country</OptionRadioLabel>
            <Check />
          </OptionItem>

          <OptionItem>
            <OptionRadioButton
              type="radio"
              name="options"
              className="op2"
              id="two"
              value="optionTwo"
              checked={select === "optionTwo"}
              onChange={event => handleOptionChange(event)}
            />
            <OptionRadioLabel htmlFor="two">Compare</OptionRadioLabel>
            <CheckMarked
              pos={selectPositions()}
            ></CheckMarked>
          </OptionItem>
          <OptionItem>
            <OptionRadioButton
              type="radio"
              name="options"
              className="op3"
              id="three"
              value="optionThree"
              checked={select === "optionThree"}
              onChange={event => handleOptionChange(event)}
            />
            <OptionRadioLabel htmlFor="three">Option #3</OptionRadioLabel>

            <Check />
          </OptionItem>
        </OptionList>
      
    </OptionsContainer>
  )
}

const mapDispatchToProps = {
  optionChange,
}

export default connect(
  null, mapDispatchToProps
)(Options)
