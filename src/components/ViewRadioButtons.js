import React from "react"
import {
  RbtnWrapper,
  LabelText,
  Item,
  StyledRbtnLabel,
  StyledRbtn,
} from './styles/styledRadiobuttons'


const ViewRadioButtons = ({ selected, handleDataTargetChange }) => {
 
  return (
    <RbtnWrapper>
      <Item>
        <StyledRbtn
          type="radio"
          name="radio"
          value="population"
          checked={selected === "population"}
          onChange={event => handleDataTargetChange(event)}
        />
        <StyledRbtnLabel />
        <LabelText>Population</LabelText>
      </Item>
      <Item>
        <StyledRbtn
          type="radio"
          name="radio"
          value="emissions"
          checked={selected === "emissions"}
          onChange={event => handleDataTargetChange(event)}
        />
        <StyledRbtnLabel />
        <LabelText>Emissions</LabelText>
      </Item>
      <Item>
        <StyledRbtn
          type="radio"
          name="radio"
          value="perCapita"
          checked={selected === "perCapita"}
          onChange={event => handleDataTargetChange(event)}
        />
        <StyledRbtnLabel />
        <LabelText>Emissons per citizen</LabelText>
      </Item>
    </RbtnWrapper>
  )
}

export default ViewRadioButtons