import React from 'react';
import Body from './Body'
import styled from 'styled-components'


const DivAdd = styled.div`
  color: lightskyblue;
  width: auto;
  height: 100vh;
  background-size: contain;
  background-image: url("https://wallpaperaccess.com/full/2178320.jpg");
  display: grid;
  grid-template-columns: 20%  1fr 20%;
  padding: 10px;
  @media screen and (max-width: 620px) {
    grid-template-columns:  1fr;
  }
`

function App() {
  return (
    <DivAdd>
      <Body/>
    </DivAdd>
  )
}

export default App;
