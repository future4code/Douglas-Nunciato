import React from 'react';
import styled from 'styled-components'
import Header from './components/Header/Header';
import MatchList from './Pages/MatchList/MatchList';
import Page1 from './Pages/Page1/Page1';

const DivAdd = styled.div`
  color: black;
  width: auto;
  height: 94vh;
  display: grid;
  
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: 20% 60% 20%;
  padding: 10px;

`

function App() {
  
  return (
    <DivAdd>
      <Header/>
      <Page1/>
      <MatchList/>
    </DivAdd>
  )
}

export default App;