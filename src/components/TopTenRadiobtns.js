import React from "react"
import {
  RbtnWrapper,
  LabelText,
  Item,
  StyledRbtnLabel,
  StyledRbtn,
} from './styles/styledRadiobuttons'


const TopTenRadiobtns = () => {
 
  return (
    <RbtnWrapper>
      <Item>
        <StyledRbtn
          type="radio"
          name="radio"
          value="By population"
          checked={true}
          onChange={event => console.log(event)}
        />
        <StyledRbtnLabel />
        <LabelText>By population</LabelText>
      </Item>
      <Item>
        <StyledRbtn
          type="radio"
          name="radio"
          value="By emissions"
          checked={false}
          onChange={event => console.log(event)}
        />
        <StyledRbtnLabel />
        <LabelText>By emissions</LabelText>
      </Item>
      <Item>
        <StyledRbtn
          type="radio"
          name="radio"
          value="By emissions per citizen"
          checked={false}
          onChange={event => console.log(event)}
        />
        <StyledRbtnLabel />
        <LabelText>By emissons per citizen</LabelText>
      </Item>
    </RbtnWrapper>
  )
}

export default TopTenRadiobtns