import styled from "styled-components";
import {qanda} from "../config/qanda";

const QandA = (props) => {
  return(
    <Container>
      <Cover />
      <Wrapper>
        {
          qanda.map(card => (
            <Card>
              <Question>{card.question}</Question>
              <Answer>{card.answer}</Answer>
            </Card>
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
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/images/qanda.jpg');
  background-position: center;
`

const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 3rem 0;
  max-width: 1440px;
  justify-content: center;

  @media(max-width: 430px) {
    gap: 2rem
  }
  
`

const Cover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(227, 220, 201, 0.4);
  backdrop-filter: blur(1px);
`

const Card = styled.div`
  width: 300px;
  border-radius: 8px;
  padding: 3rem;
  background: rgba(10, 23, 34, 0.8);
  backdrop-filter: blur(4px);
  color: #E3DCC9;
  z-index: 1;
  
  @media(max-width: 430px) {
    width: 200px;
    padding: 2rem
  }
  
`

const Question = styled.h2`
  margin-top: 0;
  font-style: italic;
  
  @media(max-width: 430px) {
    font-size: 1rem;
  }
  
`

const Answer = styled.div`
  font-size: small;

  @media(max-width: 430px) {
    font-size: x-small;
  }
  
`

export default QandA