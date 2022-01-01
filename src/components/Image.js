import React from "react";
import styled from "styled-components";

const Image = ({bgImg, bgPstn, text, title}) => {

  return(
    <Container bgImg={bgImg} bgPstn={bgPstn}>
      {
        text && title && (
          <Text>
            <Title>{title}</Title>
            {text}
          </Text>
        )
      }
    </Container>
  )

}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: ${props => `${props.bgPstn}`};
  background-repeat: no-repeat;
  background-image: ${props => `url('${props.bgImg}')`};

  @media(max-width: 430px) {
    align-items: center;
  }
  
`

const Text = styled.div`
  position: absolute;
  padding: 2rem;
  top: 20%;
  left: 20%;
  right: 20%;
  background: rgba(10, 23, 34, 0.8);
  color: #E3DCC9;
  border-radius: 8px;
  backdrop-filter: blur(4px);

  @media(max-width: 430px) {
    font-size: small;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: 60%;
  }
  
`

const Title = styled.h2`
  margin-top: 0;
  font-style: italic;
`

export default Image