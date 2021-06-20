import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Header from './components/Header/Header';
import MatchListPage from './Pages/MatchListPage/MatchListPage';
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
  const [selectedPage, setSelectedPage] = useState('page1')

  const renderPage = () =>{
    switch(selectedPage) { 
      case 'page1' :
        return <Page1/>
      case 'matchList' :
        return <MatchListPage/>
      default: 
      return <Page1/>
    }
  }
  const goToPage1 = () => {
    setSelectedPage('page1')
  }
  const goToMatchListPage = () => {
    setSelectedPage('matchList')
  }

  return (
    <DivAdd>
      <Header
        goToPage1={goToPage1}
        goToMatchListPage={goToMatchListPage}
      />
      {renderPage()}
      
    </DivAdd>
  )
}

export default App;