import React from "react";
import styled from "styled-components";

const CTABottom = () => {
  return(
    <a href='mailto:info@kertekalja.hu'>
      <Container>
        ÍRJ NEKÜNK
      </Container>
    </a>
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
    box-shadow: 0 8px 32px 0 rgba( 10, 23, 34, 0.37 );
  }

  @media(max-width: 430px) {
    font-size: small;
  }
  
`

export default CTABottom