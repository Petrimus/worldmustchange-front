import styled from 'styled-components'

export const StyledInputField = styled.input`
  margin-top: 1em;
  width: 240px;
  text-align: center;
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  font-family: 'play', sans-serif;
  font-size: 16px;
  font-weight: 200px;
  padding: 10px 0;
  transition: border 0.5s;
  outline: none;
  color: #fff;
  &::placeholder {/* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #fff;
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

export const StyledInputButton = styled.button`
  margin-top: 4em;
  border: none;
  width: 190px;
  background-color: whitesmoke;
  color: #000;
  font-size: 16px;
  line-height: 25px;
  padding: 10px 0;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    color: #fff;
    background-color: black;    
  }
`

export const StyledForm = styled.form`
  background: rgba(44,62,80,0.7);
  padding: 40px; 
`