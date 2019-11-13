import React from 'react'
import styled from 'styled-components'

const StandardButton = styled.button`
    display: inline-block;
    padding: 0.3em 1.3em;
    margin:0 1.5em 0em 1em;
    height: 3em;
    border-radius: 1.5em;
    box-sizing: border-box;    
    font-weight: 300;
    outline-style: none;
    color: #FFFFFF;
    background-color: #7395AE;
    text-align: center;
    transition: all 0.2s;
  
  &:hover {
    background-color:#4095c6;
  }  
  `

const Button = (props) => {
  // console.log('button')
  // console.log('handle button click ', props.handleButtonClick)
  
  return (
    <StandardButton onClick={props.handleButtonClick}>
     { props.text }
   </StandardButton>
  )
}

export default Button