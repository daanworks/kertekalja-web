import React from "react";
import Section from "./Section";
import CTABottom from "./CTABottom";
import styled from "styled-components";

const Main = () => {

  return(
    <Container>
      <Section backgroundImg='/images/1.jpg' />
      <Section backgroundImg='/images/2.jpg' />
      <Section />
      <CTABottom />
    </Container>
  )

}

const Container = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  height: 100vh;
`

export default Main