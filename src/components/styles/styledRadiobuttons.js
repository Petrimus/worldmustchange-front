import styled from 'styled-components'

export const RbtnWrapper = styled.div`
display: flex;
/*
height: auto;
width: 100%;
*/
padding: 10px 16px 24px 16px; 
box-sizing: border-box;
`

export const LabelText = styled.div`
font-size: 16px;
font-weight: 500; 
`

export const Item = styled.div`
display: flex;
margin-right: 15px;
/* padding: 5px 10px; */
align-items: center;
height: 48px;

position: relative;
`;

export const StyledRbtnLabel = styled.label`
position: absolute;
top: 25%;
left: 4px;
width: 24px;
height: 24px;
border-radius: 50%;
background: white;
border: 1px solid #bebebe;  
`

export const StyledRbtn = styled.input`
opacity: 0;
z-index: 1;
border-radius: 50%;
width: 24px;
height: 24px;
margin-right: 10px;
&:hover ~ ${StyledRbtnLabel} {
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
&:checked + ${StyledRbtnLabel} {
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