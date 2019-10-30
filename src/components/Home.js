import React from 'react'
// import Hello from './HelloWorld'

//import components
import ViewList from './ViewList'
import Options from './Options'

// import styles
import StyledAppLayout from './styles/layouts/StyledAppLayout'
import StyledHeaderLayout from './styles/layouts/StyledHeaderLayout'
import StyledFooterLayout from './styles/layouts/StyledFooterLayout'
import StyledOptionsLayout from './styles/layouts/StyledOptionsLayout'
import StyledViewLayout from './styles/layouts/StyledViewLayout'
import Navbar from './NavBar'


const Home = () => {

  return (
    <StyledAppLayout>
      <StyledHeaderLayout>
        <Navbar />
      </StyledHeaderLayout>
      <StyledOptionsLayout>
        <Options />
      </StyledOptionsLayout>
      <StyledViewLayout >        
        <ViewList />
      </StyledViewLayout>
      <StyledFooterLayout>
        <p style={{ color: 'white' }}>Footer</p>
      </StyledFooterLayout>
    </StyledAppLayout>
  )
}

export default Home