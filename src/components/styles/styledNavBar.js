import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledNavbar = styled.nav`
display: flex;
height: 100%;
justify-content: space-between;
background-color: #F9F9F9;
align-items: center;
padding-left: 6em;
padding-right: 4em;
box-shadow: 0 2px 2px -2px rgba(115,149,174,.6);
z-index: 2;
position: relative;
`

export const StyledNavbarLogo = styled.div`
margin: auto 0;
color:  #557A95;
text-align: center;
font-size: 1.5em;
font-weight: bold;
padding: 10px 15px;
border-radius: 5px;
`

export const StyledNavLinks = styled.div`
display: flex;
`

export const StyledNavItem = styled(Link)`
color: #7395AE;
padding: 10px 15px;
border-radius: 5px;
transition: background-color .35s ease-in-out;

:hover { 
  color: white;   
  background-color: #557A95;
}
`





