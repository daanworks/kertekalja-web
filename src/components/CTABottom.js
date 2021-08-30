import React from "react";
import styled from "styled-components";

const CTABottom = () => {
  return(
    <Container>
      KAPCSOLATFELVÉTEL
    </Container>
  )
}

const Container = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 16px;
    right: 40px;
    left: 40px;
    z-index: 1;
    height: 16px;
    letter-spacing: 0.4px;
    padding: 16px;
    background: #0A1722;
    color: #E3DCC9;
    border-radius: 4px;
    cursor: pointer;
  }
`

export default CTABottom