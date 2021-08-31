import React from "react";
import styled from "styled-components";

const Section = ({backgroundImg}) => {

  return(
    <Wrap bgImg={backgroundImg}>

    </Wrap>
  )

}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-image: ${props => `url('${props.bgImg}')`};
  scroll-snap-align: center;
`

export default Section