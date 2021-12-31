import styled from "styled-components";

const Gallery = (props) => {

  return(
    <Container bgImg={props.bgImg}>
      {
        props.images.map(image => (
          <Image bgImg={image} />
        ))
      }
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 3rem 0;
`

const Image = styled.div`
  width: 400px;
  height: 400px;
  background-image: ${props => `url('${props.bgImg}')`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
  
  @media(max-width: 430px) {
    width: 300px;
    height: 300px;
  }
`

export default Gallery