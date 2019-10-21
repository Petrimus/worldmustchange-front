import React from 'react'

// import styles
import { 
  StyledNavbar,
  StyledNavbarLogo,
  StyledNavLinks,
  StyledNavItem } from './styles/styledNavBar'

const NavBar = () => {

  return (
    <StyledNavbar>
      <StyledNavbarLogo>
        World Must Change
      </StyledNavbarLogo>
      <StyledNavLinks>
        <StyledNavItem to="/">something</StyledNavItem>        
        <StyledNavItem to="/">else</StyledNavItem>        
        <StyledNavItem to="/">logout</StyledNavItem>        
      </StyledNavLinks>
    </StyledNavbar>
  )
}

export default NavBar