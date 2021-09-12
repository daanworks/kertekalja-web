import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt as farCalendarAlt } from "@fortawesome/free-regular-svg-icons";

const CalendarTop = () => {
  return(
    <Container>
      <FontAwesomeIcon icon={farCalendarAlt} className='text-dark rotate15' size='3x' />
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
    top: 24px;
    right: 24px;
    z-index: 1;
    height: 16px;
    letter-spacing: 0.4px;
    padding: 16px;
    color: #E3DCC9;
    cursor: pointer;
  }
`

export default CalendarTop