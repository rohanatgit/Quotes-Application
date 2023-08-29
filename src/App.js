import React,{Fragment} from 'react'
import {Routes,Route} from 'react-router-dom';
import MainNavigation from './Components/MainNavigation/MainNavigation';
import AllQuotes from './Components/pages/AllQuotes';
import NewQuote from './Components/pages/NewQuote';
import ShowQuotes from './Components/pages/ShowQuotes';

function App() {
  return (
    <Fragment>
      <MainNavigation/>
      <main>
        <Routes>
          <Route path="/" element={<AllQuotes/>}/>
          <Route path="/new" element={<NewQuote/>}/>
          <Route path="/quotes/:id" element={<ShowQuotes/> }/>
        </Routes>
      </main>
    </Fragment>
  )
}

export default App
