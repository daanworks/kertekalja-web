import React from "react";
import Section from "./Section";
import CTABottom from "./CTABottom";
import styled from "styled-components";
import text from "../utils/text";
import CalendarSection from "./CalendarSection";


const Main = () => {

  return(
    <Container>
      <Section hrefId='aboutPazmand' backgroundImg='/images/2.jpg' content={text.aboutPazmand} backgroundPstn='center top' />
      <Section hrefId='aboutUs' backgroundImg='/images/1.jpg' content={text.aboutUs} backgroundPstn='center bottom' />
      <CTABottom />
      <CalendarSection />
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