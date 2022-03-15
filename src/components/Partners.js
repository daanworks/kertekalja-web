import styled from "styled-components";
import {partners} from "../config/partners";

const Partners = (props) => {
  return(
    <Container>
      {partners.map(partner => (
        <a href={partner.url} target='_blank' rel="noreferrer">
          <Image src={partner.image} style={{maxHeight: partner.height + 'px'}} />
        </a>
      ))}
    </Container>
  )
}

const Container = styled.div`
  background: #0A1722;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 2rem 0 2rem;
`

const Image = styled.img`
  
  :hover {
    filter: brightness(0.8);  
  }

  @media (max-width: 768px) {
    max-height: 28px;
  }
  
  
`

export default Partners