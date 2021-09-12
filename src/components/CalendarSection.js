import React, {useState} from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt as farCalendarAlt } from "@fortawesome/free-regular-svg-icons";


const CalendarSection = () => {

  const [show, setShow] = useState(false);

  return(
    <div>
      <CalendarCTA className='bg-dark' onClick={() => setShow(!show)}>
        <FontAwesomeIcon icon={farCalendarAlt} size='3x' className='text-light rotate15' />
      </CalendarCTA>
      {
        show && (
          <CalendarContainer>
            <Calendar />
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
`

export default CalendarSection