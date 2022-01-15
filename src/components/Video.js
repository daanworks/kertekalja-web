import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const Video = (props) => {

  const [playing, setPlaying] = useState(false)

  return(
    <Container bgImg={props.bgImg} onClick={() => {setPlaying(true)}}>
      {
        !playing && (
          <IconContainer>
            <FontAwesomeIcon icon={faPlay} size='8x' style={{width: '100%'}} />
          </IconContainer>
        )
      }
      {
        playing && (
          <VideoContainer>
            <iframe
              width='560' height="315" src={props.link}
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className='video'
              allowFullScreen>
            </iframe>
          </VideoContainer>
        )
      }
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url('${props.bgImg}')`};
  color: white;
  cursor: pointer;
  
  a {
    text-decoration: none;
    color: #e3dcc9;
  }
  
`

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
`

const IconContainer = styled.div`
  width: 10vw;
  opacity: 0.8;
`

export default Video

