import styled from 'styled-components'

export const DivApp = styled.div`
  color: black;
  width: auto;
  height: 94vh;
  display: grid;
  
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: 25% 55% 20%;
  padding: 10px;
  @media screen and (max-width: 620px) {
    grid-template-columns: 1fr;
    grid-template-rows: 25% 55% 20%;
    height: 98vh;
  }
`