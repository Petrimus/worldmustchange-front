import styled from 'styled-components'

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1em;
  width: 100%;
  height: calc(100% - 1em);
  background-color: #5D5C61;
`

export const OptionTitle = styled.h2`
  color: #7395AE;
  margin-top: 0;
`

export const OptionsBox = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 200px;
  padding: 20px 25px;
	border-radius: 20px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.13);
`

export const StyledUl = styled.ul`
  list-style-type: none;
	padding-left: 50px;
	margin: 0;
`

export const Item = styled.li`
  display: block;
	position: relative;
	padding: 20px 0px;
`

export const RadioLabel = styled.label`
  cursor: pointer; 
	font-weight: 400;
`

export const Check = styled.div`
  width: 30px; 
  height: 30px;
	position: absolute;
	border-radius: 50%;
  box-shadow: 0 6px 12px rgba(33, 150, 243, 0.35);
  transition: transform .6s cubic-bezier(0.68, -0.55, 0.27, 1.55);  
`

export const CheckMarked = styled(Check)`
  transform: translate(${props => props.pos.y}, ${props => props.pos.x}); 
	background: #B1A296; 
  box-shadow: 0 6px 12px rgba(177, 162, 150, 0.4);
`

export const StyledRadioButton = styled.input`
  position: absolute;
  visibility: hidden;

&.op1 ~ ${Check} {
  transform: translate(-50px, -25px); 
	background: #7395AE; 
}

&.op3 ~ ${Check} {
  transform: translate(-50px, -25px); 
	background: #7395AE; 
}

  &.op1:checked {
    & ~ ${Check} {      
      transform: translate(-50px, 33px);	   
    }    
  }
  
  &.op3:checked {     
    & ~ ${Check} {
    transform: translate(-50px, -83px); 
    }    
  }    
  `

