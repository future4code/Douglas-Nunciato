import React from 'react';
import styled from 'styled-components'
import Header from './components/Header';


const DivAdd = styled.div`
  color: black;
  width: auto;
  height: 94vh;
  display: grid;
  border: 0.2rem solid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px;

`

function App() {
  return (
    <DivAdd>
     <Header/>
    </DivAdd>
  )
}

export default App;