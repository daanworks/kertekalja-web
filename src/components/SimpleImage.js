import styled from "styled-components";

const SimpleImage = (props) => {
  return(
    <Picture src={props.image} />
  )
}

const Picture = styled.img`
  width: 100%;
  display: block;
`

export default SimpleImage