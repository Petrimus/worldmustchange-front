import styled from 'styled-components'

export const SearchFieldWrapper = styled.div`
display: inline-block;
width: 400px;
margin: 20px 0;
`
export const SearchForm = styled.form`
`

export const SearchInput = styled.input`
padding: 6px 12px;
width: 100%;
font-size: 16px;
box-sizing: border-box;
`

export const StyledInputField = styled.input`
  margin-top: 1em;
  width: 240px;
  text-align: center;
  background: transparent;
  border: none;
  border-top: 2px solid #7395AE;
  border-bottom: 2px solid #7395AE;
  font-family: 'play', sans-serif;
  font-size: 16px;
  font-weight: 200px;
  padding: 10px 0;
  transition: border 0.5s;
  outline: none;
  color: #7395AE;
  &::placeholder {/* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #7395AE;
  opacity: 1; /* Firefox */
}
  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: red;
  }
  &::-ms-input-placeholder { /* Microsoft Edge */
    color: red;
  }
  &:focus::placeholder {
    color: transparent;
  }
  
`

export const ListWrapper = styled.div`
border: 1px solid black;
`

export const SearchList = styled.ul`
  list-style: none;
  padding-left: 0; 
  top: 100%;
  left: 0;
  margin: 0;
`

export const SearchListItem = styled.li`
  list-style-type: none;  
  padding: 6px 12px;
  color: black; 
  outline: none;
  font-size: 16px;
  cursor: pointer;

  :hover {
    border-radius: 10px;
    background-color: #7395AE; 
  }
/*
 border: 1px solid #ececec;
*/
  
`

