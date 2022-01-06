import React from "react";
import styled from "styled-components";
import logo from '../assets/weblogo.svg'
import CTA from "./CTA";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"

const Header = () => {

  return(
    <div>
      <Container>
          <LogoContainer>
            <MainLogo src={logo} />
          </LogoContainer>
        <ButtonContainer>
          <a href='https://facebook.com/kertekalja' target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} size='2x' style={{color: '#0A1722'}} />
          </a>
          <a href='https://instagram.com/kertekalja' target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} size='2x' style={{color: '#0A1722'}} />
          </a>
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 92px;
  letter-spacing: 0.4px;
  font-size: 12px;
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
  gap: 28px;
  margin-right: 40px;

  @media (max-width: 768px) {
    //display: none;
    margin-right: 0;
  }
  
`

const MainLogo = styled.img`
  height: 64%;
  
  @media (max-width: 576px) {
    height: 48%;
  }
  
`

export default Header

