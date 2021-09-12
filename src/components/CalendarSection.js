import React, {useState} from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import '../App.css'
import 'react-calendar/dist/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt as farCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import {ClickAwayListener} from "@material-ui/core";

const CalendarSection = () => {

  const [show, setShow] = useState(false);

  const toggleCalendar = () => {
    if (show) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  return(
    <div>
      <CalendarTop onClick={toggleCalendar}>
        <FontAwesomeIcon icon={farCalendarAlt} className='text-dark rotate15' size='2x' />
      </CalendarTop>
      <CalendarCTA className='bg-dark' onClick={toggleCalendar}>
        <FontAwesomeIcon icon={farCalendarAlt} size='3x' className='text-light rotate15' />
      </CalendarCTA>
      {
        show && (
            <CalendarContainer>
              <ClickAwayListener onClickAway={toggleCalendar}>
                <Calendar locale='hu-HU' />
              </ClickAwayListener>
            </CalendarContainer>
        )
      }
    </div>
  )

}

const CalendarCTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 40px;
  right: 40px;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
  
`

const CalendarContainer = styled.div`
  position: absolute;
  bottom: 140px;
  right: 40px;
  height: 260px;
  
  @media (max-width: 768px) {
    top: 88px;
  }
  
  @media (max-width: 576px) {
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
  }
  
`

const CalendarTop = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 20px;
    right: 24px;
    z-index: 1;
    height: 16px;
    letter-spacing: 0.4px;
    padding: 16px;
    color: #E3DCC9;
    cursor: pointer;
  }
`

export default CalendarSection