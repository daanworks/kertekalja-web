import React from "react";
import styled from "styled-components";

const Quote = (props) => {
  return(
    <Container bgImg={props.bgImg}>
      <Cover />
      <PrimaryText>{props.primaryText}</PrimaryText>
      <SecondaryText>{props.secondaryText}</SecondaryText>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${props => `url('${props.bgImg}')`};
`

const Cover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(10, 23, 34, 0.8);
  backdrop-filter: blur(1px);
`

const PrimaryText = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Domine:wght@700&display=swap');
  font-family: 'Domine', serif;
  text-transform: uppercase;
  font-size: 2.6rem;
  line-height: 55px;
  letter-spacing: 0.04em;
  width: 60%;
  text-align: center;
  margin-bottom: 4rem;
  color: #E3DCC9;
  z-index: 1;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 430px) {
    font-size: 1rem;
  }
  
`

const SecondaryText = styled.div`
  font-weight: bold;
  line-height: 44px;
  letter-spacing: 0.04em;
  color: #E3DCC9;
  z-index: 1;
  font-size: 1.4rem;
`

export default Quote