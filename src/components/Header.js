import React, {useEffect, useState} from "react";
import styled from "styled-components";
import logo from '../assets/logo.png'
import CTA from "./CTA";
import '../App.css';

const Header = () => {

  const [isVisible, setIsVisible] = useState(true)

  const listenToScroll = () => {
    let heightToHideFrom = 20;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const nav1 = document.getElementById('nav1')
    const nav2 = document.getElementById('nav2')
    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false)
    } else {
      setIsVisible(true)
      nav1.href = '#'
      nav2.href = '#'
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll)
    return () =>
      window.removeEventListener("scroll", listenToScroll)
  }, [])

  return(
    <div>
      <Container>
          <LogoContainer>
            <MainLogo src={logo} />
          </LogoContainer>
        <ButtonContainer>
          <NavButton id='nav1' className={!isVisible && 'opacity-0'} href='#'>PÁZMÁNDRÓL</NavButton>
          <NavButton id='nav2' className={!isVisible && 'opacity-0'} href='#'>RÓLUNK</NavButton>
          <CTA id='cta' />
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
`

export default Header

