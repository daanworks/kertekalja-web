import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"
import React from "react";

const Footer = () => {
  return(
    <Container>
      <a
        href='https://www.google.hu/maps/place/Kertek+Alja+Rendezv%C3%A9nyhelysz%C3%ADn/@47.2900875,18.6542361,17z/data=!3m1!4b1!4m5!3m4!1s0x476a07f921b4fc5d:0x8ac9873cf8c8c48b!8m2!3d47.2901196!4d18.6564017'
        style={{color: '#E3DCC9', textDecoration: 'none'}}
        target='_blank' rel="noreferrer"
      >
        2476 Pázmánd, Széchenyi utca 19.
      </a>
      <a href='mailto:info@kertekalja.hu' style={{color: '#E3DCC9'}} >info@kertekalja.hu</a>
      <SocialIcons>
        <a href='https://facebook.com/kertekalja' target='_blank' rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} size='2x' style={{color: '#E3DCC9'}} />
        </a>
        <a href='https://instagram.com/kertekalja' target='_blank' rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} size='2x' style={{color: '#E3DCC9'}} />
        </a>
      </SocialIcons>
      <Notes>
        Kertek Alja Rendezvényhelyszín © 2022 |
        <a target='_blank' rel="noreferrer" href='https://babinszky.com/'> created by<D src='/images/d.png' width={8} /></a>
      </Notes>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 20vh;
  min-height: 180px;
  background: #0A1722;
  color: #E3DCC9;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: small;

  @media(max-width: 430px) {
    height: 30vh;
  }
  
`

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`

const Notes = styled.div`
  font-size: x-small;
  a {
    text-decoration: none;
    color: #e3dcc9;
  }
`

const D = styled.img`
  width: 8px;
  margin-left: 4px;
`

export default Footer