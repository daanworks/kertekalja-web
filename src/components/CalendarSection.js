import React, {useState} from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import '../App.css'
import 'react-calendar/dist/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt as farCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import {ClickAwayListener} from "@material-ui/core";
import bookedDates from "../config/bookedDates";
import { differenceInCalendarDays } from "date-fns";

const CalendarSection = () => {

  const [show, setShow] = useState(false);

  const toggleCalendar = () => {
    if (show) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  const isSameDay = (a, b) => {
    return differenceInCalendarDays(a, b) === 0;
  }

  const setBookedDates = ({ date, view }) => {
    if (view === 'month') {
      return bookedDates.find(dDate => isSameDay(dDate, date))
    }
  }

  return(
    <div>
      <CalendarTop onClick={toggleCalendar}>
        <FontAwesomeIcon icon={farCalendarAlt} className='text-dark rotate15' size='2x' />
      </CalendarTop>
      <CalendarCTA className='bg-dark' onClick={toggleCalendar}>
        <FontAwesomeIcon icon={farCalendarAlt} size='2x' className='text-light rotate15' />
      </CalendarCTA>
      {
        show && (
          <div>
            <CalendarContainer>
              <ClickAwayListener onClickAway={toggleCalendar}>
                <Calendar locale='hu-HU' tileDisabled={setBookedDates} />
              </ClickAwayListener>
            </CalendarContainer>
            <DarkMode />
          </div>
        )
      }
    </div>
  )

}

const CalendarCTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 3;

  @media (max-width: 768px) {
    display: none;
  }
  
`

const CalendarContainer = styled.div`
  position: fixed;
  bottom: 164px;
  right: 40px;
  height: 286px;
  z-index: 3;
  
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
  :focus {
    outline: none;
    box-shadow: none;
  }

`

const DarkMode = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.2s;
  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  z-index: 2;
`

export default CalendarSection