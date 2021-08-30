import React from "react";
import styled from "styled-components";

const CTA = () => {

  return(
    <Container>
      KAPCSOLATFELVÉTEL
    </Container>
  )

}

const Container = styled.div`
  padding: 16px;
  background: #0A1722;
  color: #E3DCC9;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
  
`

export default CTA;