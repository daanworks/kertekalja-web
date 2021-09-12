import React from "react";
import styled from "styled-components";

const Section = ({backgroundImg, content, backgroundPstn, hrefId}) => {

  return(
    <Wrap bgImg={backgroundImg} bgPstn={backgroundPstn} id={hrefId}>
      <TextArea>
        {content}
      </TextArea>
    </Wrap>
  )

}

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: ${props => `${props.bgPstn}`};
  background-repeat: no-repeat;
  background-image: ${props => `url('${props.bgImg}')`};
  scroll-snap-align: center;
`

const TextArea = styled.div`
  position: absolute;
  top: 200px;
  left: 240px;
  right: 240px;
  font-size: 16px;
  text-align: justify;
  font-weight: lighter;

  @media (max-width: 1024px) {
    left: 100px;
    right: 100px;
    top: 200px;
  }

  @media (max-width: 768px) {
    top: 160px;
  }

  @media (max-width: 576px) {
    top: 200px;
    left: 40px;
    right: 40px;
    font-size: 12px;
  }
  
`

export default Section