import styled from 'styled-components'

export const ContainerDiv = styled.div`
width: 400px;
`
export const SearchForm = styled.form`
`

export const SearchInput = styled.input`
padding: 6px 12px;
width: 100%;
font-size: 16px;
box-sizing: border-box;
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

