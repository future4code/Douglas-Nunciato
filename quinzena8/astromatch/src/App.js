import React, { useState } from 'react';
import {DivApp} from './styleApp'
import Header from './components/Header/Header';
import MatchListPage from './Pages/MatchListPage/MatchListPage';
import Page1 from './Pages/Page1/Page1';



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
    <DivApp>
      <Header
        goToPage1={goToPage1}
        goToMatchListPage={goToMatchListPage}
      />
      {renderPage()}
      
    </DivApp>
  )
}

export default App;