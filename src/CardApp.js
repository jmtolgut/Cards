import Cards from './components/Cards'
import { Layout } from './components/Layout'
import styled from 'styled-components'

function CardApp() {
  return (
    <CardContainer>
      <Layout>

        <Cards />

      </Layout>
    </CardContainer>
  )
}

export default CardApp;


const CardContainer = styled.div`
background: rgb(2, 0, 36);
background: linear-gradient(
  0deg,
  rgba(2, 0, 36, 1) 0%,
  rgba(121, 21, 9, 1) 50%,
  rgba(0, 212, 255, 1) 100%
);

height: 100%;
`