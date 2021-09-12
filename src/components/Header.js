import React from "react";
import styled from "styled-components";
import logo from '../assets/weblogo.svg'
import CTA from "./CTA";
import '../App.css';

const Header = () => {

  return(
    <div>
      <Container>
          <LogoContainer>
            <MainLogo src={logo} />
          </LogoContainer>
        <ButtonContainer>
          <NavButton href='#'>PÁZMÁNDRÓL</NavButton>
          <NavButton href='#'>RÓLUNK</NavButton>
          <CTA />
        </ButtonContainer>
      </Container>
    </div>
  )

}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 92px;
  letter-spacing: 0.4px;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  height: 100%;

  @media (max-width: 576px) {
    margin-left: 28px;
  }
  
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
`
const NavButton = styled.a`
  text-decoration: none;
  color: #0A1722;
  margin-right: 20px;
  transition: all 400ms ease-in;
  
  @media (max-width: 768px) {
    display: none;
  }
  
`

const MainLogo = styled.img`
  height: 64%;
  
  @media (max-width: 576px) {
    height: 48%;
  }
  
`

export default Header

