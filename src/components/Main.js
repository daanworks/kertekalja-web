import React from "react";
import Section from "./Section";
import 'react-calendar/dist/Calendar.css';
import CTABottom from "./CTABottom";
import styled from "styled-components";
import text from "../text/text";

const Main = () => {

  return(
    <Container>
      <Section backgroundImg='/images/2.jpg' content={text.aboutPazmand} backgroundPstn='center top' />
      <Section backgroundImg='/images/1.jpg' content={text.aboutUs} backgroundPstn='center bottom' />
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