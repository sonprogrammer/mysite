import React from 'react'
import { Footer, Header, InfoSection } from '../../components'
import { StyledContainer} from './style'


const LayoutPage = () => {
  return (
    <StyledContainer>
        <Header/>
        <InfoSection />
        <Footer />
    </StyledContainer>
  )
}

export default LayoutPage
