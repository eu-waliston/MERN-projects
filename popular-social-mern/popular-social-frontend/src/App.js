import React from 'react';
import './App.css';

import styled from 'styled-components';

/* COMPONENTS */
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Header />
        <div className='app__body'>
          <Sidebar />
          <Feed />
        </div>
      </AppWrapper>
    </div>
  );
}
const AppWrapper = styled.div `
  background-color: #f1f2f5;
  .app__body {
    display: flex;
  }
`
export default App;
