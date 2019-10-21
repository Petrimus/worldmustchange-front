import React, { useState } from 'react'
import { connect } from 'react-redux'
import { optionChange } from '../reducers/optionReducer'

// import styles
import {
  OptionsContainer,
  OptionTitle,
  OptionsBox,
  Item,
  StyledUl,
  RadioLabel,
  StyledRadioButton,
  Check,
  CheckMarked
} from '../components/styles/styledOptions'

const Options = (props) => {
  const [select, setSelect] = useState('optionOne')
  const handleSelectChange = event => {
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
      <OptionsBox>
        <OptionTitle>Menu</OptionTitle>
        <StyledUl>
          <Item>
            <StyledRadioButton
              type="radio"
              name="radio"
              className="op1"
              value="optionOne"
              id="one"
              checked={select === "optionOne"}
              onChange={event => handleSelectChange(event)}
            />
            <RadioLabel htmlFor="one">Option #1</RadioLabel>
            <Check />
          </Item>

          <Item>
            <StyledRadioButton
              type="radio"
              name="radio"
              className="op2"
              id="two"
              value="optionTwo"
              checked={select === "optionTwo"}
              onChange={event => handleSelectChange(event)}
            />
            <RadioLabel htmlFor="two">Option #2</RadioLabel>
            <CheckMarked
              pos={selectPositions()}
            ></CheckMarked>
          </Item>
          <Item>
            <StyledRadioButton
              type="radio"
              name="radio"
              className="op3"
              id="three"
              value="optionThree"
              checked={select === "optionThree"}
              onChange={event => handleSelectChange(event)}
            />
            <RadioLabel htmlFor="three">Option #3</RadioLabel>

            <Check />
          </Item>
        </StyledUl>
      </OptionsBox>
    </OptionsContainer>
  )
}

const mapDispatchToProps = {
  optionChange,
}

export default connect(
  null, mapDispatchToProps
)(Options)