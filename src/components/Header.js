import styled from "styled-components";
import logo from '../assets/weblogo.svg'
import CTA from "./CTA";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"
import {useCallback, useEffect, useState} from "react";

const Header = () => {

  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY || window.scrollY < 30) {
        document.getElementById('container').classList.remove('d-none')
      } else if (y < window.scrollY) {
        document.getElementById('container').classList.add('d-none')
      }
      setY(window.scrollY);
    }, [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return(
    <div>
      <Container id='container'>
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000000;
  width: 100%;
  height: 92px;
  letter-spacing: 0.4px;
  font-size: 12px;
  transition: opacity ease-in-out 400ms;
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

