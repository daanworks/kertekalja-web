import React from "react";
import styled from "styled-components";

const CTA = () => {

  return(
    <a style={{'textDecoration': 'none'}} href='mailto:info@kertekalja.hu'>
      <Container>
        KAPCSOLATFELVÉTEL
      </Container>
    </a>
  )

}

const Container = styled.div`
  padding: 16px;
  background: #0A1722;
  box-shadow: 0 8px 32px 0 rgba( 10, 23, 34, 0.37 );
  color: #E3DCC9;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
  
`

export default CTA;