import React, {useEffect, useState} from "react";
import styled from "styled-components";
import logo from '../assets/weblogo.svg'
import CTA from "./CTA";
import '../App.css';

const Header = () => {

  const [isVisible, setIsVisible] = useState(true)
  const [isMediumScreen, setIsMediumScreen] = useState(false)

  const listenToScroll = () => {
    let heightToHideFrom = 20;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }

  const screenListener = () => {
    const screenSize = window.innerWidth
    if (window.innerWidth < 768) {
      setIsMediumScreen(true)
    } else {
      setIsMediumScreen(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll)
    window.addEventListener('resize', screenListener)
    return () => {
      window.removeEventListener("scroll", listenToScroll)
      window.removeEventListener('resize', screenListener)
    }
  }, [])

  return(
    <div>
      <Container>
          <LogoContainer>
            <MainLogo className={(!isVisible && isMediumScreen) && 'opacity-0'} src={logo} />
          </LogoContainer>
        <ButtonContainer>
          <NavButton id='nav1' className={!isVisible && 'opacity-0'} href='#'>PÁZMÁNDRÓL</NavButton>
          <NavButton id='nav2' className={!isVisible && 'opacity-0'} href='#'>RÓLUNK</NavButton>
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

