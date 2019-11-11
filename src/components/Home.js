import React from 'react'
import { connect } from 'react-redux'
// import Hello from './HelloWorld'

//import components
import Options from './Options'
import Lists from './Lists'
import Charts from './Charts'

// import styles
import StyledAppLayout from './styles/layouts/StyledAppLayout'
import StyledHeaderLayout from './styles/layouts/StyledHeaderLayout'
import StyledFooterLayout from './styles/layouts/StyledFooterLayout'
import StyledOptionsLayout from './styles/layouts/StyledOptionsLayout'
import StyledViewLayout from './styles/layouts/StyledViewLayout'
import Navbar from './NavBar'

const Home = (props) => {
 
  return (
    <StyledAppLayout>
      <StyledHeaderLayout>
        <Navbar />
      </StyledHeaderLayout>
      <StyledOptionsLayout>
        <Options />
      </StyledOptionsLayout>
      <StyledViewLayout >        
       { props.option === 'optionOne' ? <Charts /> : <Lists />}
      </StyledViewLayout>
      <StyledFooterLayout>
        <p style={{ color: 'white' }}>Footer</p>
      </StyledFooterLayout>
    </StyledAppLayout>
  )
}

export default connect(
  (state) =>  { return { option: state.options }}, null
)(Home)

