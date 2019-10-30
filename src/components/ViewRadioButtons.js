import React from "react"
import styled from "styled-components"

const ViewRadioButtons = ({ selected, handleSelectChange}) => {
 
  return (
    <Wrapper>
      <Item>
        <ViewRadioButton
          type="radio"
          name="radio"
          value="population"
          checked={selected === "population"}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <LabelText>Population</LabelText>
      </Item>
      <Item>
        <ViewRadioButton
          type="radio"
          name="radio"
          value="emissions"
          checked={selected === "emissions"}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <LabelText>Emissions</LabelText>
      </Item>
      <Item>
        <ViewRadioButton
          type="radio"
          name="radio"
          value="mixed"
          checked={selected === "mixed"}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <LabelText>Emissons per citizen</LabelText>
      </Item>
    </Wrapper>
  )
}

export default ViewRadioButtons

const Wrapper = styled.div`
  display: flex;
  /*
  height: auto;
  width: 100%;
  */
  padding: 10px 16px 24px 16px; 
  box-sizing: border-box;
`

const LabelText = styled.div`
  font-size: 16px;
  font-weight: 500; 
`

const Item = styled.div`
  display: flex;
  margin-right: 15px;
  /* padding: 5px 10px; */
  align-items: center;
  height: 48px;

  position: relative;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;  
`

const ViewRadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  &:checked + ${RadioButtonLabel} {
    background: #7395AE;
    border: 1px solid #7395AE;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: white;
    }
  }
`


