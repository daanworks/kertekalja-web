import React from "react";
import styled from "styled-components";

const Header = () => {

  return(
    <div>
      <Container>
        <LogoContainer>
          LOGO
        </LogoContainer>
        <ButtonContainer>
          BUTTON1 BUTTON2 BUTTON3
        </ButtonContainer>
      </Container>
    </div>
  )

}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: gray;
  width: 100%;
  height: 60px;
`

const LogoContainer = styled.div`
  margin-left: 20px;
`

const ButtonContainer = styled.div`
  margin-right: 20px;
`


export default Header

