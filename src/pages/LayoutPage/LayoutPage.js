import React from 'react'
import { Header, InfoSection, Experience, Develops } from '../../components'
import { StyledContainer} from './style'


const LayoutPage = () => {
  return (
    <StyledContainer>
        <Header/>
        <InfoSection />
        <Experience />
        <Develops />
    </StyledContainer>
  )
}

export default LayoutPage
