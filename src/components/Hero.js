import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import Wrapper from './Wrapper'
import { ProfileImage } from './ComponentLibrary'

const MainHeader = styled.header`
  width: 100%;
  height: 475px;
  background-image: url("assets/images/header_crop.jpg");
  background-color: var(--headerfallback);
  position: relative;
  background-size: cover;
  background-position: 40% 60%;
  `

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 40px);
  justify-content: right;
  gap: 10px;
  padding-top: 20px;
`

const TextWrapper = styled.div`
  position: absolute;
  top: 30%;
  max-width: 300px;
`

const Hero = () => {
  return (
    <MainHeader>
      <Wrapper>
        <IconContainer>
          <Icon variant="linkedin" size={40} color="black" />
          <Icon variant="github" size={40} color="black" />
          <Icon variant="stackoverflow" size={40} color="black" />
        </IconContainer>
        <TextWrapper>
          <h1 className="header-text-name">Portfolio: Amanda W.</h1>
          <h1 className="header-text-title">Frontend Developer</h1>
          <h1 className="header-text-other-title">With A Fashion Background</h1>
        </TextWrapper>
        <ProfileImage src="./assets/images/me.jpg" />
      </Wrapper>
    </MainHeader>
  )
}

export default Hero