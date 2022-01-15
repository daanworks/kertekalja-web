import styled from "styled-components";

const Gallery = (props) => {

  return(
    <Container>
      <Wrapper>
        {
          props.images.map(image => (
            <Image bgImg={image} />
          ))
        }
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 3rem 0;
`

const Wrapper = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
`

const Image = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 8px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${props => `url('${props.bgImg}')`};
  
  @media(max-width: 430px) {
    width: 300px;
    height: 300px;
  }
`

export default Gallery