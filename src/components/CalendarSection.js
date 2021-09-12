import React from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

const CalendarSection = () => {

  return(
    <Container>
      <Calendar />
    </Container>

  )

}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default CalendarSection